import Link from "next/link";
import React, { useState } from "react";

interface FormProps {
  firstName:string;
  lastName:string;
  password:string;
  email:string;
  checked: boolean;

}

const Signup = () => {
  const [formState, setFormState] = useState<FormProps>({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    checked: true,
  });

  // console.log({ ...formState });

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.checked });
  };

  return (
    <section className="flex justify-center  backgroundImage pb-10">
      <form onSubmit={handleSubmitForm} className="w-full max-w-lg padding">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-firstName"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-[#417B13] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-firstName"
              type="text"
              value={formState.firstName}
              required
              onChange={onChange}
              name="firstName"
              placeholder="Enter your first name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-lastName"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-[#417B13] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-lastName"
              type="text"
              required
              value={formState.lastName}
              onChange={onChange}
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-[#417B13] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              required
              value={formState.email}
              onChange={onChange}
              name="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-[#417B13] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              required
              value={formState.password}
              onChange={onChange}
              name="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        {/* <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-cpassword"
            >
              Confirm password <span className="text-red-500">*</span>
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-[#417B13] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-cpassword"
              type="text"
              required
              name="cpassword"
              placeholder="Confirm your password"
            />
          </div>
        </div> */}
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="checked"
            id="checked"
            checked={formState.checked}
            onChange={onCheck}
            className="accent-[#417B13]"
          />
          <label htmlFor="checked" className="text-[#5D5C5C] text-[.8125rem]">
            by continuing you agree to the{" "}
            <Link className="text-[#417B13] underline" href="">
              Terms and Conditions
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="py-3 bg-black text-white px-6 rounded-md shadow-md w-full mt-8"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Signup;
