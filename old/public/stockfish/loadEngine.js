var loadEngine = (function ()
{
 "use strict";

 var debugging = false;

 function spawn_worker(path, options)
 {
 var engine,
 worker = {};

 var args = options && options.args || [];

 function echo(data)
 {
 var str;
 if (debugging) {
 console.log("echo: ", data.toString())
 }
 if (worker.onmessage) {
 str = data.toString();
 if (str.slice(-1) === "\n") {
 str = str.slice(0, -1);
 }
 worker.onmessage(str);
 } else {
 setTimeout(function wait()
 {
 onstd(data);
 }, 50);
 }
 }

 if (path.slice(-3).toLowerCase() === ".js") {
 args.push(path);
 path = process.execPath;
 if (process.version.substr(1, 2) >= 14 && process.version.substr(1, 2) < 19) {
 args.unshift("--experimental-wasm-threads");
 args.unshift("--experimental-wasm-simd");
 }
 }
 engine = require("child_process").spawn(path, args, {stdio: "pipe"});

 engine.stdout.on("data", echo);
 engine.stderr.on("data", echo);

 engine.on("error", function (err)
 {
 throw err;
 });

 worker.postMessage = function onin(str)
 {
 if (debugging) {
 console.log("stdin: " + str)
 }
 engine.stdin.write(str + "\n");
 };

 worker.terminate = function ()
 {
 engine.kill();
 };

 return worker;
 }

 function new_worker(path, options)
 {
 if (typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]") {
 return spawn_worker(path || require("path").join(__dirname, "src", "stockfish.js"), options);
 }

 path = path || "stockfish.js";

 if (typeof Worker === "function") {
 return new Worker(path);
 }
 }

 function get_first_word(line)
 {
 var space_index = line.indexOf(" ");

 if (space_index === -1) {
 return line;
 }
 return line.substr(0, space_index);
 }

 return function loadEngine(path, options)
 {
 var worker = new_worker(path, options),
 engine = {started: Date.now()},
 queue = [],
 eval_regex = /Total Evaluation[\s\S]+\n$/;

 function determine_queue_num(line, queue)
 {
 var cmd_type,
 first_word = get_first_word(line),
 cmd_first_word,
 i,
 len;

 if (queue[0].cmd !== "bench" && queue[0].cmd !== "perft") {
 if (first_word === "uciok" || first_word === "option" || first_word === "id") {
 cmd_type = "uci";
 } else if (first_word === "readyok") {
 cmd_type = "isready";
 } else if (first_word === "bestmove" || first_word === "info") {
 cmd_type = "go";
 } else {
 cmd_type = "other";
 }

 len = queue.length;

 for (i = 0; i < len; i += 1) {
 cmd_first_word = get_first_word(queue[i].cmd);
 if (cmd_first_word === cmd_type || (cmd_type === "other" && (cmd_first_word === "d" || cmd_first_word === "eval"))) {
 return i;
 }
 }
 }

 return 0;
 }

 worker.onmessage = function onmessage(e)
 {
 var line = typeof e === "string" ? e : e.data,
 done,
 queue_num = 0,
 my_queue,
 split,
 i;

 if (line.indexOf("\n") > -1) {
 split = line.split("\n");
 for (i = 0; i < split.length; i += 1) {
 onmessage(split[i]);
 }
 return;
 }

 if (debugging) {
 console.log("debug (onmessage): " + line)
 }

 if (engine.stream) {
 engine.stream(line);
 }

 if (!queue.length || line.substr(0, 14) === "No such option" || line.substr(0, 9) === "Stockfish") {
 return;
 }

 queue_num = determine_queue_num(line, queue);

 my_queue = queue[queue_num];

 if (!my_queue) {
 return;
 }

 if (my_queue.stream) {
 my_queue.stream(line);
 }

 if (typeof my_queue.message === "undefined") {
 my_queue.message = "";
 } else if (my_queue.message !== "") {
 my_queue.message += "\n";
 }

 my_queue.message += line;

 if (line === "uciok") {
 done = true;
 engine.loaded = true;
 } else if (line === "readyok") {
 done = true;
 engine.ready = true;
 } else if (line.substr(0, 8) === "bestmove" && my_queue.cmd !== "bench") {
 done = true;
 my_queue.message = line;
 } else if (my_queue.cmd === "d") {
 if (line.substr(0, 15) === "Legal uci moves" || line.substr(0, 6) === "Key is") {
 my_queue.done = true;
 done = true;
 if (line === "Key is") {
 my_queue.message = my_queue.message.slice(0, -7);
 }
 }
 } else if (my_queue.cmd === "eval") {
 if (eval_regex.test(my_queue.message)) {
 done = true;
 }
 } else if (line.substr(0, 8) === "pawn key") {
 done = true;
 } else if (line.substr(0, 12) === "Nodes/second") {
 done = true;
 } else if (line.substr(0, 15) === "Unknown command") {
 done = true;
 }

 if (done) {
 queue.splice(queue_num, 1);

 if (my_queue.cb && !my_queue.discard) {
 my_queue.cb(my_queue.message);
 }
 }
 };

 engine.send = function send(cmd, cb, stream)
 {
 var no_reply;

 cmd = String(cmd).trim();

 if (debugging) {
 console.log("debug (send): " + cmd);
 }

 if (cmd !== "ucinewgame" && cmd !== "flip" && cmd !== "stop" && cmd !== "ponderhit" && cmd.substr(0, 8) !== "position" && cmd.substr(0, 9) !== "setoption" && cmd !== "stop") {
 queue[queue.length] = {
 cmd: cmd,
 cb: cb,
 stream: stream
 };
 } else {
 no_reply = true;
 }

 worker.postMessage(cmd);

 if (no_reply && cb) {
 setTimeout(cb, 0);
 }
 };

 engine.stop_moves = function stop_moves()
 {
 var i,
 len = queue.length;

 for (i = 0; i < len; i += 1) {
 if (debugging) {
 console.log("debug (stop_moves): " + i, get_first_word(queue[i].cmd))
 }
 if (get_first_word(queue[i].cmd) === "go" && !queue[i].discard) {
 engine.send("stop");
 queue[i].discard = true;
 }
 }
 };

 engine.get_queue_len = function get_queue_len()
 {
 return queue.length;
 };

 engine.quit = function ()
 {
 if (worker && worker.terminate) {
 worker.terminate();
 worker = null;
 engine.ready = undefined;
 }
 };

 return engine;
 };
}());

if (typeof module !== "undefined" && module.exports) {
 module.exports = loadEngine;
}

if (typeof window !== "undefined") {
 window.loadEngine = loadEngine;
}
