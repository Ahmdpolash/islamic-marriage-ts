import Container from "@/Components/shared/Container";
import React from "react";
import { BsHandbag } from "react-icons/bs";

interface Plan {}
const Plan: React.FC = () => {
  return (
    <div className="my-2">
      <Container>
        <div className="mx-auto text-center">
          <h1 className="font-bold tracking-wider text-[18px] text-dark lg:text-[22px] ">
            Connection Details
          </h1>

          <div className="max-w-xl border bg-gradient-to-r from-[#FBF6F9] to-[#FEFDFE]  rounded-lg shadow-pink-700/10 cursor-pointer shadow-lg mx-auto my-3">
            <div className="flex justify-center items-center p-4">
              <div>
                <div className="h-[50px] md:h-[53px] lg:h-[53px] w-[50px] md:w-[53px] lg:w-[53px] rounded-full border bg-[#F5E9F1] border-purple mx-auto">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mx-auto mt-[8px] md:mt-[9px] lg:mt-[7px]">
                    0
                  </h4>
                </div>
                <h3 className="mt-3 my-3 tracking-wider text-dark font-normal  text-[17px]">
                  Available Connection
                </h3>
              </div>
            </div>
          </div>

          {/* plan card */}

          <div className="mt-8  my-2">
            <h1 className="font-bold tracking-wide mb-3 lg:mb-4 text-[18px] text-dark lg:text-[22px] ">
              Buy your connection
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7  cursor-pointer">
              {/* basic */}
              <div className="border shadow-md  bg-gradient-to-r px-3 py-4 md:p-2 lg:px-7 lg:py-6 from-[#FBF6F9] to-[#FEFDFE] shadow-pink-700/10 rounded-lg">
                <div className="flex justify-center items-center">
                  <div className="space-y-1 lg:space-y-2">
                    <h2 className="font-semibold text-dark text-[18px] lg:text-[20px]">
                      Basic
                    </h2>
                    <h3 className="font-medium text-[#1BF631]">
                      2 connections
                    </h3>
                    <h2 className="font-bold text-dark text-xl tracking-wide">
                      $200
                    </h2>
                    <p className="font-medium text-dark tracking-wide text-[13px]">
                      You will be able to view contact details of 2 biodatas.
                    </p>
                    <p className="font-medium lg:text-start md:text-center text-[#FF0000]  tracking-wide text-[13px]">
                      Expired on 3 months
                    </p>
                    <div className="pt-3 pb-1 mx-auto inline-block">
                      <button className="text-purple rounded-3xl border border-purple h-10 w-[180px] font-medium flex items-center gap-2 justify-center">
                        <BsHandbag className="text-[20px] lg:text-[23px] text-purple" />{" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standard */}
              <div className="border shadow-md  bg-gradient-to-r px-3 py-4 md:p-2 lg:px-7 lg:py-6 from-[#FBF6F9] to-[#FEFDFE] shadow-pink-700/10 rounded-lg">
                <div className="flex justify-center items-center">
                  <div className="space-y-1 lg:space-y-2">
                    <h2 className="font-semibold text-dark text-[18px] lg:text-[20px]">
                      Standard
                    </h2>
                    <h3 className="font-medium text-[#1BF631]">
                      5 connections
                    </h3>
                    <h2 className="font-bold text-dark text-xl tracking-wide">
                      $450
                    </h2>
                    <p className="font-medium text-dark tracking-wide text-[13px]">
                      You will be able to view contact details of 5 biodatas.
                    </p>
                    <p className="font-medium lg:text-start md:text-center text-[#FF0000]  tracking-wide text-[13px]">
                      Expired on 6 months
                    </p>
                    <div className="pt-3 pb-1 mx-auto inline-block">
                      <button className="text-purple rounded-3xl border border-purple h-10 w-[180px] font-medium flex items-center gap-2 justify-center">
                        <BsHandbag className="text-[20px] lg:text-[23px] text-purple" />{" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium */}
              <div className="border shadow-md  bg-gradient-to-r px-3 py-4 md:p-2 lg:px-7 lg:py-6 from-[#FBF6F9] to-[#FEFDFE] shadow-pink-700/10 rounded-lg">
                <div className="flex justify-center items-center">
                  <div className="space-y-1 lg:space-y-2">
                    <h2 className="font-semibold text-dark text-[18px] lg:text-[20px]">
                      Premium
                    </h2>
                    <h3 className="font-medium text-[#1BF631]">
                      10 connections
                    </h3>
                    <h2 className="font-bold text-dark text-xl tracking-wide">
                      $800
                    </h2>
                    <p className="font-medium text-dark tracking-wide text-[13px]">
                      You will be able to view contact details of 10 biodatas.
                    </p>
                    <p className="font-medium lg:text-start md:text-center text-[#FF0000]  tracking-wide text-[13px]">
                      Expired on 12 months
                    </p>
                    <div className="pt-3 pb-1 mx-auto inline-block">
                      <button className="text-purple rounded-3xl border border-purple h-10 w-[180px] font-medium flex items-center gap-2 justify-center">
                        <BsHandbag className="text-[20px] lg:text-[23px] text-purple" />{" "}
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Plan;
