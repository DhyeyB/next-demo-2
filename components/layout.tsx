import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      <div>{props.children}</div>
      <Footer></Footer>
    </>
  );
}
