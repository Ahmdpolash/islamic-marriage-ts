"use client";
import Image from "next/image";
import user from "../../assets/biodata.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

const Biodata = () => {
  const [tab, setTab] = useState("filters");

  return (
    <div className="my-4 px-4 lg:px-7">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-7">
        <div className=" w-full col-span-1">
          <div>
            {/* tabs */}
            <div className="bg-[#E6E6E6] rounded-sm  cursor-pointer p-3 flex justify-center items-center w-full">
              <div
                onClick={() => setTab("filters")}
                className={`${
                  tab === "filters" ? "bg-white text-dark" : "text-slate-600"
                } w-full mx-auto text-center rounded-md  font-medium  p-1`}
              >
                <span>Filters</span>
              </div>
              <div
                onClick={() => setTab("biodata")}
                className={`${
                  tab === "biodata" ? "bg-white text-dark" : "text-slate-600"
                } w-full mx-auto text-center rounded-md  font-medium  p-1`}
              >
                <span>Biodata No</span>
              </div>
            </div>

            <div>
              {tab === "filters" && (
                <div className="py-2">
                  <div className="flex my-2 justify-between items-center">
                    <button className="py-[6px] px-5 flex border border-[#AE4F8C] gap-1 items-center rounded-md bg-[#AE4F8C] text-white">
                      Search
                    </button>
                    <button
                      className="py-[6px] px-5 flex gap-1 items-center rounded-md border text-[#AE4F8C] border-[#AE4F8C]
                    "
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}

              {tab === "biodata" && (
                <div className="py-2 text-center">biodata number</div>
              )}
            </div>
          </div>
        </div>

        {/* right content */}

        <div className="  w-full col-span-4 ">
          <div className="space-y-2">
            <h1 className="font-bold tracking-wide text-violet text-xl lg:text-2xl">
              Biodata
            </h1>
            <h3 className="text-[#999999] font-normal text-[15px]">
              6000 biodata found
            </h3>
          </div>

          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-lg shadow-md border-slate-300"
                >
                  <div className="relative">
                    {/* header */}
                    <div className="bg-purple py-4 rounded-t-lg text-white space-y-2 text-center">
                      <Image
                        className="mx-auto  w-[75px] border-2 border-white h-[75px] rounded-full"
                        src={user}
                        height={40}
                        width={40}
                        alt="user"
                      />
                      <h2 className="text-xl lg:text-[22px] font-semibold">
                        Biodata number
                      </h2>
                      <h3 className="font-semibold">UER-56461</h3>
                    </div>

                    {/* wishlists */}
                    <div className="absolute right-3 top-3 cursor-pointer h-[34px] w-[34px] rounded-full border border-white">
                      <IoMdHeartEmpty className="mx-auto text-white text-[23px] mt-[6px]" />
                    </div>

                    {/* table info */}
                    <div className="p-2 my-4 text-[15px] lg:text-[16px]">
                      <div className="flex  text-start px-1 border-slate-400 w-full  border-t border-b">
                        <span className="w-full border-r border-slate-400 p-2 font-semibold text-dark">
                          Birth year
                        </span>
                        <span className="w-full p-2 font-semibold text-dark">
                          01-06-1996
                        </span>
                      </div>
                      <div className="flex px-1  text-start border-slate-400 w-full   border-b">
                        <span className="w-full border-r border-slate-400 p-2 font-semibold text-dark">
                          Height
                        </span>
                        <span className="w-full p-2 font-semibold text-dark">
                          5.4
                        </span>
                      </div>
                      <div className="flex px-1  border-slate-400 w-full text-start  border-b">
                        <span className="w-full border-r border-slate-400 p-2 font-semibold text-dark">
                          Complexion
                        </span>
                        <span className="w-full p-2 font-semibold text-dark">
                          Light Brown
                        </span>
                      </div>
                    </div>

                    {/* btn */}
                    <div className="mx-auto text-center mb-3">
                      <button className="text-white tracking-wider font-semibold bg-gradient-to-l py-2 px-5 rounded-lg text-[15px] from-[#8C2065] to-[#311A49]">
                        Full Biodata
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
