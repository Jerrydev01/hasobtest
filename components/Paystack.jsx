import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";

const Paystack = () => {
  const { cartItems } = useSelector((state) => state.product);

  const cashTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const publicKey = "pk_test_d952a1215d7aa35e20067bf8b846345ea0495602";
  const amount = parseInt(`${cashTotal * 100}`);
  const [email, setEmail] = useState("zeus@gmail.com");
  const [name, setName] = useState("Zeus");
  const [phone, setPhone] = useState("");

  const handlePay = (e) => {
    e.preventDefault();
    // alert(`The name you entered was: ${name}`)
  };

  const componentProps = {
    reference: new Date().getTime().toString(),
    email,
    amount,
    phone,
    name,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
  };

  return (
    <div className="">
      <div className="">
        <div className="w-full max-w-xs text-left">
          <form
            onSubmit={handlePay}
            className="bg-white shadow-md px-8 pt-6 pb-8  rounded-sm w-[18.75rem]"
          >
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                value={name}
                type="text"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="zeus@gmail.com"
                required
              />
              <p className="text-xs italic text-red-500">
                Please fill out all fields.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <PaystackButton
                className="bg-[#417B13] w-full hover:bg-black duration text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                {...componentProps}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Paystack;