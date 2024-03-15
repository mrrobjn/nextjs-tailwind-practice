"use client";

import userService from "@/api/user";
import { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    action: "login",
  });

  const handleChange = (e: any) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = await userService.login(info);
    } catch (error) {}
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#EEF2F5]">
      <div className="bg-white p-12 rounded shadow-sm w-[500px]">
        <form action="POST" onSubmit={handleSubmmit}>
          <h1 className="font-bold text-3xl mb-1">Back to your digital life</h1>
          <p className="text-lg text-[#545454] mb-6">
            Choose one of the option to go
          </p>
          <div className="mb-3">
            <input
              className="p-3 w-full rounded-sm border-solid border-2 border-[#E6E6E6] outline-[#007bff]"
              type="email"
              name="email"
              placeholder="example@example.com"
              onChange={handleChange}
              autoComplete=""
              required
            />
          </div>
          <div className="mb-9">
            <input
              className="p-3 w-full rounded-sm border-solid border-2 border-[#E6E6E6] outline-[#007bff]"
              type="password"
              name="password"
              placeholder="*********"
              onChange={handleChange}
              autoComplete=""
              required
            />
          </div>
          <div className="flex text-base text-[#4F4F4F] items-center mb-6">
            <span className="mr-3">Or continue with</span>
            <div className="flex-1 h-[1px] bg-[#E7E7E7]"></div>
          </div>
          <div className="flex justify-between w-full mb-9">
            <div className="basis-[30%] rounded bg-[#F7F7F7] py-4 flex justify-center items-center">
              <img src="/icon/search.png" className="w-[30px]" alt="" />
            </div>
            <div className="basis-[30%] rounded bg-[#F7F7F7] py-4 flex justify-center items-center">
              <img src="/icon/meta.png" className="w-[30px]" alt="" />
            </div>
            <div className="basis-[30%] rounded bg-[#F7F7F7] py-4 flex justify-center items-center">
              <img src="/icon/apple-logo.png" className="w-[30px]" alt="" />
            </div>
          </div>
          <button
            className="bg-primary text-white w-full p-3 rounded-md font-bold"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
