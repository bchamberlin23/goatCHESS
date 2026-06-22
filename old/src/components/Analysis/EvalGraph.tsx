"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { MoveAnalysis } from "@/lib/types";
import { CLASSIFICATION_COLORS } from "@/lib/types";
import { clampEvalForDisplay } from "@/lib/win-probability";

interface EvalGraphProps {
  moves: MoveAnalysis[];
  currentPly: number;
  onMoveClick: (ply: number) => void;
}

export function EvalGraph({ moves, currentPly, onMoveClick }: EvalGraphProps) {
  const data = moves.map((move) => ({
    ply: move.ply,
    moveNumber: Math.ceil(move.ply / 2),
    eval: clampEvalForDisplay(move.evalAfter, move.mateAfter),
    classification: move.classification,
    san: move.san,
  }));

  if (data.length === 0) {
    return (
      <div className="h-40 flex items-center justify-center text-zinc-500 text-sm border border-zinc-800 rounded-lg">
        Run analysis to see evaluation graph
      </div>
    );
  }

  return (
    <div className="h-40 border border-zinc-800 rounded-lg bg-zinc-900/50 p-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 5, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="whiteGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f4f4f5" stopOpacity={0.4} />
              <stop offset="50%" stopColor="#71717a" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#27272a" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
          <XAxis
            dataKey="ply"
            tick={{ fill: "#a1a1aa", fontSize: 10 }}
            axisLine={{ stroke: "#52525b" }}
            tickFormatter={(ply: number) => (ply % 2 === 1 ? `${Math.ceil(ply / 2)}.` : "")}
          />
          <YAxis
            domain={[-10, 10]}
            tick={{ fill: "#a1a1aa", fontSize: 10 }}
            axisLine={{ stroke: "#52525b" }}
            width={30}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: "6px",
              fontSize: "12px",
            }}
            formatter={(value) => {
              const num = typeof value === "number" ? value : Number(value ?? 0);
              return [`${num > 0 ? "+" : ""}${num.toFixed(1)}`, "Eval"];
            }}
            labelFormatter={(ply) => {
              const moveNum = Math.ceil(Number(ply) / 2);
              const isWhite = Number(ply) % 2 === 1;
              return `Move ${moveNum}${isWhite ? "." : "..."}`;
            }}
          />
          <ReferenceLine y={0} stroke="#71717a" strokeDasharray="3 3" />
          {currentPly > 0 && (
            <ReferenceLine
              x={currentPly}
              stroke="#10b981"
              strokeWidth={2}
            />
          )}
          <Area
            type="monotone"
            dataKey="eval"
            stroke="#a1a1aa"
            fill="url(#whiteGrad)"
            strokeWidth={2}
            dot={(props) => {
              const { cx, cy, payload } = props;
              if (cx == null || cy == null) return <circle key={payload.ply} r={0} />;
              const isBad = ["blunder", "mistake", "inaccuracy"].includes(payload.classification);
              const isCurrent = payload.ply === currentPly;
              return (
                <circle
                  key={payload.ply}
                  cx={cx}
                  cy={cy}
                  r={isCurrent ? 5 : isBad ? 4 : 2}
                  fill={
                    isCurrent
                      ? "#10b981"
                      : isBad
                        ? CLASSIFICATION_COLORS[payload.classification as keyof typeof CLASSIFICATION_COLORS]
                        : "#71717a"
                  }
                  stroke="#18181b"
                  strokeWidth={1}
                  style={{ cursor: "pointer" }}
                  onClick={() => onMoveClick(payload.ply)}
                />
              );
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
