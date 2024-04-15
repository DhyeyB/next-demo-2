import Layout from "@/components/layout";
import React from "react";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";

const Index: NextPageWithLayout = () => {
  const routes = [
    {
      name: "Blog index page",
      route: "blog",
    },
    {
      name: "Blog first blog nested route",
      route: "/blog/first-blog",
    },
    {
      name: "Dynamic page id /111",
      route: "/dynamicpages/page/111",
    },
    {
      name: "Dynamic page catch id /1/2/3",
      route: "/dynamicpages/pagecatchall/1/2/3",
    },
    { name: "Page with middleware route", route: "/middlewareroute" },
    {
      name: "SSR with api request",
      route: "/ssr",
    },
    {
      name: "API default 200 api response",
      route: "/api/default",
    },
    {
      name: "API redirect to root /",
      route: "/api/redirect",
    },
    {
      name: "Form with api resp",
      route: "/form",
    },
  ];
  return (
    <>
      Index root page
      <div>
        <h1>Links:</h1>
        <ul>
          {routes.map((route) => (
            <li key={route.route}>
              <Link href={route.route}>{route.name}</Link>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;