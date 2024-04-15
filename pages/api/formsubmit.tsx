import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import { Formidable } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const formsubmit = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await new Promise((resolve, reject) => {
    const form = new Formidable();

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err });
      resolve({ err, fields, files });
    });
  });

  setTimeout(() => {
    return res.status(200).json(data);
  });
};

export default formsubmit;
