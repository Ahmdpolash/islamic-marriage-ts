"use client";
import Container from "@/Components/shared/Container";
import Link from "next/link";
import Image from "next/image";
import data from "../../Components/data/kazioffice.json";

import h1 from "../../assets/community/h6.png";
import h2 from "../../assets/community/h7.png";
import h3 from "../../assets/community/h8.png";
import h4 from "../../assets/community/h9.png";
import h5 from "../../assets/community/h10.png";

import { IoMdBookmark } from "react-icons/io";

import { CiLocationOn } from "react-icons/ci";

import { useState } from "react";
import Ratings from "@/Components/Ratings/Ratings";
import KaziOfficeReview from "@/Components/Review/KaziOfficeReview";
const images = [h1, h2, h3, h4, h5];

const SingleKaziOffice = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="my-3">
      <Container>
        {/* breadcrumb */}
        <div>{/* <SharedBreadcrumb /> */}</div>

        <div className="my-4 lg:my- pt-4 lg:pt-6 lg:pb-">
          {/* carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* carousel */}
            <div className="  w-full col-span- flex mx-auto flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-[70%] ">
                <div className="lg:h-full">
                  <Image
                    className="w-full border rounded-md shadow-md h-[210px] md:h-[280px] lg:h-full"
                    src={currentImage}
                    height={60}
                    width={200}
                    alt="product"
                  />
                </div>
              </div>
            </div>

            {/* details */}
            <div className="max-w-lg order-3 lg:order-2 text-dark mt-3 lg:mt-0 col-span- w-full ">
              <div className="space-y-3">
                <h1 className="text-xl lg:text-2xl font-semibold">
                  Loving Sunrise
                </h1>
                <div className="flex items-center gap-1">
                  <Ratings ratings={4} />
                  <span className="text-[14px] text-slate-500">
                    (150 Reviews) |
                  </span>
                  <span className="text-[15px] font-medium text-[#14B925]">
                    Available
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-[22px]" />
                  <p className="font-medium text-[14px]">
                    34 No Ward, Dhaka City Corporation
                  </p>
                </div>
                <p className="font-semibold text-[14px]">$192.00</p>
                <p className="text-justify text-dark text-[15px] lg:text-[16px] font-normal tracking-wider">
                  Lorem ipsum dolor sit amet consectetur. Placerat egestas quis
                  donec tincidunt eu ornare dolor arcu. Maecenas iaculis at orci
                  risus elementum. Eget et est.
                </p>

                <div className="h-[1px] bg-slate-600 w-full my-2"></div>
                <div className="my-2 space-y-1 text-dark">
                  <div className="flex cursor-pointer gap-4 lg:gap-6 pt-3 items-center">
                    <Link href="/contact-us">
                      {" "}
                      <button className="rounded-lg border text-primaryPurple border-primaryPurple font-semibold text-[15px] border-black w-[160px] py-[10px] ">
                        Contact Us
                      </button>
                    </Link>
                    <button className="rounded-lg border text-primaryPurple border-primaryPurple font-semibold text-[15px] border-black w-[160px] py-[10px] ">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 order-2 lg:order-3">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 mx-auto  gap-3">
              {images.map((image, i) => (
                <button
                  key={i}
                  className="w-full"
                  onClick={() => setCurrentImage(image)}
                >
                  <Image
                    key={i}
                    className="w-full rounded-md border shadow-md h-[80px] md:h-[100px] lg:h-[115px]"
                    src={image}
                    height={70}
                    width={120}
                    alt="product"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* review */}

          <div className="mt-5 lg:mt-10">
            <h1 className="text-dark font-semibold text-xl lg:text-2xl ">
              Public Review
            </h1>
            <KaziOfficeReview />
          </div>

          {/*More community */}
          <div className="my-4 mt-5 lg:mt-10">
            <h1 className="text-[18px] font-medium tracking-wide flex items-center gap-2 mb-3 lg:mb-6 text-[#522B79] ">
              <IoMdBookmark className="text-purple text-[23px]" /> See more Kazi
              Office
            </h1>
            <div className="grid cursor-pointer grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
              {data.slice(0, 5).map((item, i) => (
                <div className=" " key={i}>
                  <Image
                    className="w-full h-[160px] md:h-[185px] lg:h-[200px]"
                    src={item.image}
                    height={70}
                    width={120}
                    alt="product"
                  />
                  <Link href="/product-details">
                    <div className="space-y-2 mt-2 p-2 mb-4 lg:mb-6">
                      <h1 className="font-semibold text-[15px]">{item.name}</h1>
                      <div className="flex items-center gap-2">
                        <p className="text-[14px] text-[#9A236F]">
                          ${item.current}
                        </p>
                        <p className="text-[14px] text-slate-400">
                          ${item.old}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleKaziOffice;
