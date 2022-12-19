import React, { useState } from "react";
import { bondList } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/legacy/image";
import logo from "../../assets/LOGO2.png";
import Paystack from "../Paystack";

import { BiChevronDown } from "react-icons/bi";

import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "../../store/features/productSlice";
import Link from "next/link";
import { formatMoney } from "../../utils/currencyFormatter";

const Cart = () => {
  const { cartItems } = useSelector((state: any) => state.product);

  const [check, setCheck] = useState(true);
  const [showPay, setShowPay] = useState(false);

  const dispatch = useDispatch(); // use this to dispatch actions to the store

  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleDecreaseFromCart = (id: string) => {
    dispatch(decreaseFromCart(id));
  };

  // delete item when checkbox is checked

  const handleCheckbox = (e: any, id: any) => {
    if (e.target.checked) {
      return null;
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleShowPay = () => {
    if (showPay) {
      setShowPay(false);
    } else {
      setShowPay(true);
    }
  };

  return (
    <section className="padding pb-[4rem]">
      <div className="w-full ">
        {cartItems.length > 0 ? (
          <article className="flex flex-col w-full gap-4">
            {cartItems.map((item: any) => {
              return (
                <div key={item.id}>
                  <div className="flex justify-between items-center py-4 px-4 border rounded-[3px] border-[#417B13]">
                    <div className="flex items-center gap-3">
                      <input
                        className=" accent-[#417B13] "
                        onChange={(e) => handleCheckbox(e, item)}
                        checked={check}
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <Image
                        src={logo}
                        width={50}
                        height={50}
                        alt={item.name}
                      />
                      <h3 className="font-semibold">{item.name}</h3>
                    </div>
                    <div className="text-[.875rem] flex gap-4 items-center">
                      <span className="border border-[#B0B0B0] px-3 py-2 rounded-[3px] font-semibold text-[#417B13]">
                        Automatic
                      </span>
                      <button
                        onClick={() => {
                          handleRemoveFromCart(item);
                        }}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="">
                      <p className="text-[#B0B0B0] pb-2">Value (₦)</p>
                      <div className="border rounded-[3px] border-[#417B13] flex px-3 py-2 gap-5">
                        <h3 className="font-semibold">
                          {`${item.price.toLocaleString()}.00`}
                        </h3>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              handleDecreaseFromCart(item);
                            }}
                            className="flex items-center justify-center w-6 font-bold border border-black rounded-full"
                          >
                            -
                          </button>
                          <span className="text-[#B0B0B0] font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => {
                              handleAddToCart(item);
                            }}
                            className="flex items-center justify-center w-6 font-bold border border-black rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {showPay ? (
                    <>
                      <div
                        onClick={() => setShowPay(!showPay)}
                        className="fixed top-0 right-0 bottom-0 left-0 bg-[#37374987]  z-10"
                      ></div>

                      <div className="fixed lg:top-[50%] top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white  flex flex-col gap-3 justify-center items-center ">
                        <Paystack />
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })}
            <div className="text-[#B0B0B0] w-full py-4 px-4 border rounded-[3px] border-[#417B13] pl-12">
              <div className="flex items-center justify-between ">
                <div className="flex justify-between w-full text-[14px]">
                  <div className="flex gap-12">
                    <p className="flex items-center gap-1">
                      fees + Taxes <BiChevronDown />
                    </p>
                    <span className="">{formatMoney(2.09)}</span>
                  </div>
                  <div className="">
                    <p className="text-[.875rem]">Total Buy</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <h3 className="pt-2 text-lg font-bold text-black">
                  {formatMoney(
                    cartItems.reduce((acc: any, item: any) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                  )}
                </h3>
              </div>
              <div className="text-[.875rem] lg:w-[20%]">
                <p className="">
                  This is a 730 day bond. You have a fixed income
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button
                onClick={handleShowPay}
                className="bg-[#417B13] text-white px-4 py-2 rounded-[3px]"
              >
                Check Out
              </button>
            </div>
          </article>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h3 className="text-[#B0B0B0] font-semibold text-center">
              Your cart is empty
            </h3>
            <p className="text-[#B0B0B0] text-center">
              You have no items in your shopping cart. Click continue shopping
              to add items to your cart.
            </p>
            <Link href="/bond">
              <button className="bg-[#417B13] text-white px-4 py-2 rounded-[3px]">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
