"use client";
import Image from "next/image";

import Link from "next/link";
import { sidebarList } from "../.././../../lib/data";

import { usePathname } from "next/navigation";
import { user } from "../../../../assets/member/men.png";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaList } from "react-icons/fa6";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="relative">
      <div className="block absolute left-5 top-2 bg-purple px-2 py-[5px] rounded-md lg:hidden ">
        <FaList
          className="text-[23px] text-white  "
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* desktop sidebar */}
      <div className="lg:block hidden lg:w-[300px] md:w-full pb-16 border-r-[2px] shadow-sm">
        <div>
          <div className="mt-5">
            <Image
              src={"https://i.ibb.co/wNF6JXp/user.png"}
              width={100}
              height={100}
              alt="user"
              className="rounded-full w-[70px] h-[70px] object-cover mx-auto"
            />
          </div>

          <div className="flex space-y-2 flex-col gap-2 justify-center items-center my-4">
            <h2 className="text-dark text-xl lg:text-[22px] font-medium">
              Biodata Status
            </h2>
            <button className="bg-purple text-white  py-1 px-[6px] rounded-lg text-[14px]">
              In Review
            </button>
            <button className="bg-purple flex items-center gap-2 text-white  py-1 px-[15px] w-[130px] justify-center  rounded-lg text-[15px]">
              <FaUser /> Profile
            </button>
          </div>

          <ul className="">
            {sidebarList.map((item) => (
              <li
                key={item.id}
                className={`hover:bg-slate-50 py-2  m lg:px-12 px-5 ${
                  path === item.link || path === item.link1
                    ? "bg-[#E7E7E7] text-primaryPurple text-primary font-medium"
                    : ""
                }`}
              >
                <Link href={item.link} className="flex items-center gap-2 ">
                  {item.icon} <span className="">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* mobile sidebar */}

      <div
        className={`${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-screen fixed w-[300px] md:w-[350px] bg-white text-black z-50 top-0 left-0`}
      >
        <div className="flex items-center p-4">
          <button
            className="px-4 top-1 text-violet py-2 text-3xl font-semibold flex absolute right-0 "
            onClick={() => setOpen(false)}
          >
            <RxCross1 className="text-violet" />
          </button>
        </div>

        <ul className="flex  flex-col p-5 gap-5 text-[18px]">
          <ul className="">
            {sidebarList.map((item) => (
              <li
                key={item.id}
                className={`hover:bg-slate-50 py-2  m lg:px-12 px-5 ${
                  path === item.link || path === item.link1
                    ? "bg-[#E7E7E7] text-primaryPurple text-primary font-medium"
                    : ""
                }`}
              >
                <Link href={item.link} className="flex items-center gap-2 ">
                  {item.icon} <span className="">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}
