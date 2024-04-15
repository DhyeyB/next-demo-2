import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("redirected from redirect api");
  res.redirect(307, "/");
}
