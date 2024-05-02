"use client";
import React, { useState } from "react";
import RatingReact from "react-rating";
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import Ratings from "../Ratings/Ratings";

import Image from "next/image";
import RatingTemp from "../Ratings/RatingTemp";

const KaziOfficeReview = () => {
  const [rat, setRat] = useState("");

  return (
    <div className="my-4 mt-3 lg:mt-5">
      {/* comment section */}

      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-16 md:justify-center lg:justify-start  lg:gap-20  lg:flex-row">
        {/* rating icons */}
        <div className="flex flex-col justify-center  gap-2 lg:justify-start items-start py-2  lg:py-4">
          <div className="mx-auto lg:mx-0">
            <span className="text-3xl md:text-4xl lg:text-5xl font-semibold ">
              4.5
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-600">
              /5
            </span>
          </div>
          <div className="flex  text-2xl md:text-3xl lg:text-4xl">
            <Ratings ratings={4.5} />
          </div>
          <p className="text-sm text-slate-600 mx-auto lg:mx-0">15 Reviews</p>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-3 mt-2 md:lg-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={5} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[80%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">30</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={4} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[60%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">20</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={3} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[40%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">8</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={2} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[70%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">16</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={1} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[25%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">7</p>
          </div>

          <div className="flex gap-3 mt-2 md:mt-3 lg:mt-5">
            <div className="text-md flex gap-1 w-[93px]">
              <RatingTemp rating={0} />
            </div>
            <div className="w-[200px] h-[12px] md:h-[13px] lg:h-[14px] bg-slate-200 relative">
              <div className="h-full bg-[#FD8C00] w-[0%]"></div>
            </div>
            <p className="text-sm text-slate-600 w-[0%]">0</p>
          </div>
        </div>
      </div>

      <div className=" w-full mt-5 lg:mt-10 lg:w-[60%]">
        {[1, 2, 3].map((r, i) => (
          <div key={i} className="border rounded-md border-slate-300 mb-4 p-4">
            <div className="flex items-center gap-3">
              <Image
                height={40}
                width={40}
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="author/image"
                className="w-[40px] h-[40px] border rounded-full object-cover"
              />
              <div className="space-y-1">
                <span className="text-dark text-md">Polash Ahmed</span>
                <div className="flex gap-1 items-center">
                  <RatingTemp rating={4} />
                </div>
              </div>
            </div>
            <p className="text-dark text-sm mb-4 mt-3">
              Lorem ipsum dolor sit amet consectetur. Egestas eget dui cras in
              mollis elit id nisi. Auctor sed amet non amet magna. Nam amet
              ullamcorper nulla commodo aenean id habitasse sagittis duis.
              Sodales risus diam egestas eu semper in. Integer enim netus est
              sed volutpat tincidunt purus blandit augue. Urna nulla
              pellentesque mauris vulputate consequat enim fringilla volutpat.
            </p>
          </div>
        ))}

        <div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <RatingReact
                onChange={(e) => setRat(e)}
                initialRating={rat}
                emptySymbol={
                  <span className="text-slate-600 text-4xl">
                    <CiStar />
                  </span>
                }
                fullSymbol={
                  <span className="text-[#FD8C00] text-4xl">
                    <AiFillStar />
                  </span>
                }
              />
            </div>
            <form>
              <textarea
                required
                className="border outline-0 p-3 w-full"
                name=""
                id=""
                placeholder="Write a review"
                cols="30"
                rows="5"
              ></textarea>
              <div className="mt-2">
                <button className="py-1 px-5 bg-indigo-500 text-white rounded-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* rating icons end */}

      {/* comment section */}
    </div>
  );
};

export default KaziOfficeReview;
