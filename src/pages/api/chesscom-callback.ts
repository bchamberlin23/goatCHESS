import type { NextApiRequest, NextApiResponse } from "next";
import { isAllowedChessComCallbackUrl } from "@/lib/chessCom";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = typeof req.query.url === "string" ? req.query.url : "";

  if (!isAllowedChessComCallbackUrl(url)) {
    res.status(400).json({ message: "Unsupported Chess.com callback URL." });
    return;
  }

  try {
    const chessComRes = await fetch(url, {
      headers: {
        accept: "application/json",
        "user-agent": "Chesskit local analysis tool",
      },
    });

    const text = await chessComRes.text();

    try {
      res.status(chessComRes.status).json(JSON.parse(text));
    } catch {
      res.status(chessComRes.status).send(text);
    }
  } catch {
    res.status(502).json({ message: "Unable to reach Chess.com." });
  }
}
