import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import HeaderBond from "./HeaderBond";
import { useWindowSize } from "../hooks/windowSize";

const BaseLayout = ({ children }: any) => {
  const [show, setShow] = useState<boolean>(true);

  const size = useWindowSize();

  const handleShow = () => {
    setShow(!show);
  };

  const router = useRouter();
  return (
    <section className="">
      <div className="">
        {router.pathname === "/" || router.pathname === "/signup" ? (
          <Header
            size={size}
            show={show}
            setShow={setShow}
            handleShow={handleShow}
          />
        ) : null}
      </div>
      <div className="">
        {router.pathname === "/cart" || router.pathname === "/bond" ? (
          <HeaderBond
            size={size}
            show={show}
            setShow={setShow}
            handleShow={handleShow}
          />
        ) : null}
      </div>
      {children}
      {/* <Footer /> */}
    </section>
  );
};

export default BaseLayout;
