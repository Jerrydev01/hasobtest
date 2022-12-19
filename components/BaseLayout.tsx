import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import HeaderBond from "./HeaderBond";

const BaseLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <section className="">
      <div className="">
        {router.pathname === "/" || router.pathname === "/dmo" ? (
          <Header />
        ) : null}
      </div>
      <div className="">
        {router.pathname === "/cart" || router.pathname === "/bond" ? (
          <HeaderBond />
        ) : null}
      </div>
      {children}
      {/* <Footer /> */}
    </section>
  );
};

export default BaseLayout;
