import React from "react";
import logo from "../assets/LOGO.png";
import logoMobile from "../assets/LOGO2.png";
import Image from "next/legacy/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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

const Header = () => {
  const { cartItems } = useSelector((state: any) => state.product);

  const router = useRouter();

  //

  return (
    <section className="">
      <header className="flex items-center justify-between lg:py-6 py-4 padding">
        <Link className="hidden lg:block" href="/">
          <div className="w-[400px]">
            <Image
              src={logo}
              alt="logo"
              objectFit="cover"
              layout="responsive"
            />
          </div>
        </Link>
        {/* mobile */}
        <Link className="lg:hidden" href="/">
          <div className="w-[80px]">
            <Image
              src={logoMobile}
              alt="logo"
              objectFit="cover"
              layout="responsive"
            />
          </div>
        </Link>
        <ul className="flex items-center justify-between gap-5 font-bold">
          {navBar.map((nav) => (
            <li key={nav.id} className="inline-block whitespace-nowrap">
              <Link
                className={`hover:text-[#417B13] translate duration-150 ${
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
          <li className="relative inline-flex text-3xl">
            <Link href="/cart">
              <span className="">
                <AiOutlineShoppingCart />
              </span>
              <span className="absolute flex items-center justify-center w-5 text-sm text-white translate-x-6 -translate-y-10 bg-red-500 rounded-full h-fit">
                {cartItems.length > 0
                  ? cartItems.reduce((acc: any, item: any) => acc + item.quantity, 0)
                  : 0}
              </span>
            </Link>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Header;
