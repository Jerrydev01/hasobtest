import React, { useState } from "react";
import logo from "../assets/LOGO.png";
import logoMobile from "../assets/LOGO2.png";
import Image from "next/legacy/image";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useWindowSize } from "../hooks/windowSize";

interface IPropsNav {
  id: number;
  name: string;
  link: string;
}

const navBar: IPropsNav[] = [
  {
    id: 1,
    name: "Bond Offer",
    link: "/bond",
  },
  {
    id: 2,
    name: "DMO",
    link: "/dmo",
  },
  {
    id: 3,
    name: "Features",
    link: "/features",
  },

  {
    id: 4,
    name: "Login",
    link: "/login",
  },
  {
    id: 5,
    name: "Sign Up",
    link: "/signup",
  },
];

const Header = ({ size, show, setShow, handleShow }: any) => {
  const { cartItems } = useSelector((state: any) => state.product);

  const router = useRouter();

  //

  return (
    <section className="">
      <header
        className={`fixed top-0 left-0 right-0 flex items-center justify-between w-full py-4 lg:py-8  padding lg:bg-transparent h-fit z-50
        }`}
      >
        <Link className="hidden lg:block " href="/">
          <div className="w-[400px]">
            <Image
              src={logo}
              alt="logo"
              objectFit="cover"
              layout="responsive"
              priority
            />
          </div>
        </Link>
        {/* mobile */}
        <Link className="fixed w-full top-3 lg:hidden" href="/">
          <div className="w-[80px]">
            <Image
              src={logoMobile}
              alt="logo"
              objectFit="cover"
              layout="responsive"
              priority
            />
          </div>
        </Link>
        <nav className={`items-center  gap-8 l lg:flex lg:h-fit `}>
          <>
            <ul
              className={`absolute left-0 right-0  flex flex-col items-center gap-12 text-base font-bold lg:gap-5 lg:justify-between lg:static lg:flex-row top-24  ${
                show === true && size.width! < 1024
                  ? "hidden  "
                  : "block  bg-[#ECFBEC] lg:bg-transparent  h-screen lg:h-fit bounce-left"
              }`}
            >
              {navBar.map((nav) => (
                <li key={nav.id} className="inline-block whitespace-nowrap">
                  <Link
                    onClick={() => setShow(!show)}
                    className={`hover:text-[#417B13] translate duration-150 lg:text-base text-2xl  ${
                      router.pathname === nav.link ? "text-[#417B13]" : ""
                    } ${
                      nav.link === "/signup"
                        ? "bg-black text-white px-6 py-3 rounded-[3px] hover:text-white"
                        : ""
                    }} ${
                      nav.link === "/login"
                        ? "border border-[#417B13] text-[#417B13] px-6 py-3 rounded-[3px]"
                        : ""
                    }}`}
                    href={nav.link}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
          <div className="absolute flex items-center gap-6 lg:static right-5 top-8">
            <Link className="relative inline-flex text-3xl" href="/cart">
              <span className="">
                <AiOutlineShoppingCart />
              </span>
              <span className="absolute flex items-center justify-center w-5 text-sm text-white translate-x-6 -translate-y-2 bg-red-500 rounded-full h-fit">
                {cartItems.length > 0
                  ? cartItems.reduce(
                      (acc: any, item: any) => acc + item.quantity,
                      0
                    )
                  : 0}
              </span>
            </Link>
            <button onClick={handleShow} className="text-3xl lg:hidden">
              {show ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Header;
