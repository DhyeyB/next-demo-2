import { useRouter } from "next/router";
import React from "react";

const Pagesegemets = () => {
  const router = useRouter();
  console.log("router.query", router.query);
  return (
    <div>
      Page Segemets:{" "}
      {typeof router.query.pagesegemets === "string"
        ? router.query.pagesegemets
        : router.query.pagesegemets?.map((param: string) => param + ", ")}
    </div>
  );
};

export default Pagesegemets;
