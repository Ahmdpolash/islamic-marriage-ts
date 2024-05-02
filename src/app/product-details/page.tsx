"use client";
import Container from "@/Components/shared/Container";
import data from "../../Components/data/shop.json";
import Link from "next/link";
import Image from "next/image";
import { IoMdBookmark } from "react-icons/io";

import tupi from "../../assets/shop/tupi.png";
import panjabi from "../../assets/shop/panjabi.png";
import tasbih from "../../assets/shop/tashbih.png";
import women from "../../assets/shop/women.png";
import returnIcon from "../../assets/shop/retrun.png";
import delivery from "../../assets/shop/delivery.png";
import { useState } from "react";
const images = [tupi, panjabi, tasbih, women];

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleIncrement = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecremment = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("Quantity must be greater than One");
    }
  };

  return (
    <div className="my-3">
      <Container>
        {/* breadcrumb */}
        <div>{/* <SharedBreadcrumb /> */}</div>

        <div className="my-4 lg:my-6 pt-4 lg:pt-6 lg:pb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            {/* carousel */}
            <div className="  w-full col-span- flex mx-auto flex-col lg:flex-row gap-4">
              <div className="lg:w-[20%] order-2 lg:order-1 h-full">
                <div className="flex  flex-row mx-auto lg:flex-col  gap-3">
                  {images.map((image, i) => (
                    <button key={i}
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

              <div className="w-full lg:w-[70%] order-1 lg:order-2 h-full">
                <div className="lg:h-full">
                  <Image
                    className="w-full border rounded-md shadow-md h-[190px] md:h-[260px] lg:h-full"
                    src={currentImage}
                    height={60}
                    width={200}
                    alt="product"
                  />
                </div>
              </div>
            </div>

            {/* details */}
            <div className="max-w-lg text-dark mt-3 lg:mt-0 col-span- w-full ">
              <div className="space-y-2">
                <h1 className="text-xl lg:text-2xl font-semibold">
                  Havic HV G-92 Gamepad
                </h1>
                <p className="font-medium">$192.00</p>
                <p className="text-justify text-dark text-[15px] lg:text-[16px] font-normal tracking-wider">
                  PlayStation 5 Controller Skin High quality vinyl with air{" "}
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </p>

                <div className="h-[1px] bg-slate-600 w-full my-2"></div>
                <div className="my-2 space-y-1 text-dark">
                  <div className="flex gap-2  items-center">
                    <h3 className="font-medium text-dark lg:text-[17px] text-[16px]">
                      Colours :
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <div
                        className={` h-[22px] w-[22px] bg-[#E07575] rounded-full  pt-1 ${
                          selectedColor === "red"
                            ? " border-2 border-primaryPurple"
                            : " "
                        }`}
                        onClick={() => setSelectedColor("red")}
                      ></div>
                      <div
                        className={` h-[22px] w-[22px] bg-green-600 rounded-full  pt-1 ${
                          selectedColor === "green"
                            ? " border-2 border-primaryPurple"
                            : " "
                        }`}
                        onClick={() => setSelectedColor("green")}
                      ></div>
                      <div
                        className={` h-[22px] w-[22px] bg-pink-600 rounded-full  pt-1 ${
                          selectedColor === "pink"
                            ? " border-2 border-primaryPurple"
                            : " "
                        }`}
                        onClick={() => setSelectedColor("pink")}
                      ></div>
                    </div>
                  </div>

                  <div className="flex cursor-pointer gap-2 items-center">
                    <div>
                      <h3 className="font-medium text-dark lg:text-[17px] text-[16px]">
                        Size :
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div
                        className={`border border-slate-500 h-[34px] w-[36px] rounded-md mt-1 mx-auto pt-1 text-center ${
                          selectedSize === "XS"
                            ? "bg-primaryPurple text-white border-primaryPurple"
                            : "bg-white "
                        }`}
                        onClick={() => setSelectedSize("XS")}
                      >
                        <span className="">XS</span>
                      </div>
                      <div
                        className={`border border-slate-500 h-[34px] w-[36px] rounded-md mt-1 mx-auto pt-1 text-center ${
                          selectedSize === "S"
                            ? "bg-primaryPurple text-white border-primaryPurple"
                            : "bg-white "
                        }`}
                        onClick={() => setSelectedSize("S")}
                      >
                        S
                      </div>
                      <div
                        className={`border border-slate-500 h-[34px] w-[36px] rounded-md mt-1 mx-auto pt-1 text-center ${
                          selectedSize === "M"
                            ? "bg-primaryPurple text-white border-primaryPurple"
                            : "bg-white "
                        }`}
                        onClick={() => setSelectedSize("M")}
                      >
                        M
                      </div>
                      <div
                        className={`border border-slate-500 h-[34px] w-[36px] rounded-md mt-1 mx-auto pt-1 text-center ${
                          selectedSize === "L"
                            ? "bg-primaryPurple text-white border-primaryPurple"
                            : "bg-white "
                        }`}
                        onClick={() => setSelectedSize("L")}
                      >
                        L
                      </div>
                      <div
                        className={`border border-slate-500 h-[34px] w-[36px] rounded-md mt-1 mx-auto pt-1 text-center ${
                          selectedSize === "XL"
                            ? "bg-primaryPurple text-white border-primaryPurple"
                            : "bg-white "
                        }`}
                        onClick={() => setSelectedSize("XL")}
                      >
                        XL
                      </div>
                    </div>
                  </div>

                  <div className="flex cursor-pointer gap-4 lg:gap-6 pt-3 items-center">
                    <div className="flex text-[18px] font-medium items-center rounded-lg w-[170px] border border-[#9A236F] ">
                      <button
                        onClick={handleDecremment}
                        className="border-r p-[10px] w-[30%] text-center "
                      >
                        {" "}
                        -{" "}
                      </button>
                      <span className="border-r border-r-slate-500 w-[40%] p-[10px]  text-center ">
                        {quantity}
                      </span>
                      <span
                        onClick={handleIncrement}
                        className="py-[10px] rounded-r-lg border-none h-full block bg-[#9A236F] text-white text-center w-[30%]"
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <button className="rounded-lg border font-semibold text-[15px] border-black w-[160px] py-[10px] ">
                      Buy Now
                    </button>
                  </div>

                  {/* delivary box */}
                  <div className="pt-5 lg:pt-6">
                    <div className="border border-dashed  border-slate-500 rounded-md w-full">
                      <div className="border-b border-slate-500">
                        <div className="flex gap-3  p-5 items-center">
                          <Image
                            className="w-[45px]"
                            src={delivery}
                            height={50}
                            width={40}
                            alt="delivery"
                          />
                          <div className="space-y-2">
                            <h2 className="font-semibold">Free Delivery</h2>
                            <p className="text-[14px] font-normal">
                              Enter your postal code for Delivery Availability
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex gap-3  p-5 items-center">
                          <Image
                            className="w-[40px]"
                            src={returnIcon}
                            height={50}
                            width={40}
                            alt="returnIcon"
                          />

                          <div className="space-y-2">
                            <h2 className="font-semibold">Return Delivery</h2>
                            <p className="text-[14px] font-normal">
                              Free 30 Days Delivery Returns. Details
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* related product */}
        <div className="my-4">
          <h1 className="text-[18px] font-medium tracking-wide flex items-center gap-2 mb-3 lg:mb-6 text-[#522B79] ">
            <IoMdBookmark className="text-purple text-[23px]" /> Related Item
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
                      <p className="text-[14px] text-slate-400">${item.old}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
