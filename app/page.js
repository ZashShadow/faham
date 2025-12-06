"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EyeClose, EyeOpen, Lock, User } from "@/public/assets/mySvgs";
export default function Home() {

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
    console.log("Login submitted");
  };

  return (
    <div className="flex">
      {/* <Link href="/dashboard"><button type="button" className="bg-[#1F244E] text-white px-5 py-2 rounded-xl cursor-pointer">Open Dashboard</button></Link> */}
      <div className="login-form flex flex-col items-center gap-5 bg-white w-1/3 px-5 py-5">
        <div className="flex flex-col items-center gap-2">
          <Image src="/assets/fahamlogo.webp" alt="login-image" height={118} width={118} />
          <p className="text-sm text-[#98A6BD]">Experience Performance & Ease</p>
          <hr className="bg-gray-200 h-0.5 w-full" />
        </div>
        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5 w-full px-4">

          <div className="field flex items-center relative">
            <input
              type="text"
              placeholder="Username"
              className="p-2 pr-10 rounded-sm w-full border border-gray-300"
            />
            <User className="absolute right-2 text-gray-500" />
          </div>


          <div className="field flex items-center relative">

            <input
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="p-2 pr-10 rounded-sm w-full border border-gray-300"
            />

            {isVisible
              ? <EyeOpen className={"cursor-pointer absolute right-2 text-gray-500"} onClick={toggleVisibility} />
              : <EyeClose className={"cursor-pointer absolute right-2 text-gray-500"} onClick={toggleVisibility} />
            }
          </div>


          <p className="text-right cursor-pointer flex items-center justify-end gap-1 hover:underline text-sm">
            <Lock className="h-4 w-4" />Forgot Password?
          </p>

          <button type="submit" className="bg-sidebar text-white py-2 rounded-sm cursor-pointer hover:bg-sidebar/95">
            Login
          </button>
        </form>
        <Image className="mt-auto mb-8" src="/assets/iisat-logo.webp" alt="login-image" height={300} width={300} />
      </div>
      <div
        className="login-image flex justify-center items-center bg-[url('/assets/login-image.webp')] w-full h-screen bg-cover bg-center bg-no-repeat relative"
      >
        <div
          className="overlay absolute bg-[#242333]/85 size-full z-10"
        />
        <div className="flex flex-col gap-5 justify-center items-center relative z-20">
          <div>
            <Image src="/assets/bulb-white.webp" alt="bulb" height={118} width={118} />
            <h1 className="text-[#ffffff] text-2xl font-semibold">WELCOME TO FAHAM</h1>
            <hr className="w-35 h-0.5 bg-white" />
            <p className="text-[#ffffff] text-6xl font-bold">Let's Get Started</p>
            <p className="text-[#ffffff] text-3xl font-semibold">Experience Performance & Ease</p>
          </div>
        </div>
      </div>
    </div>
  );
}
