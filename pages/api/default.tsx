import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log("req", req);
  res.status(201).json({ message: "this is default 200 api response." });
}
