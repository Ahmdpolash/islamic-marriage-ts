import React from "react";
import logo from "../../assets/logo.png";

import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import facebook from "../../assets/icon/facebook@2x.png";
import twitter from "../../assets/icon/twitter@2x.png";
import insta from "../../assets/icon/insta.png";
import linkedin from "../../assets/icon/in.svg.svg";
import google from "../../assets/icon/google.png";
import app from "../../assets/icon/app.png";

import Container from "./Container";
import Link from "next/link";
import { FaAngleRight, FaPhone, FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#E6E6E6] text-dark">
      <Container>
        <div className="grid py-4 grid-cols-2 text-dark md:grid-cols-3 lg:grid-cols-7 gap-5">
          <div className="col-span-2">
            <div className="pb-5 flex  gap-1 items-center">
              <div className="">
                <Image
                  className="mx-auto "
                  src={logo}
                  height={18}
                  width={45}
                  alt="logo"
                />
              </div>
            </div>

            <p className="w-full md:w-full lg:w-[290px]">
              Lorem ipsum dolor sit amet consectetur. Vitae et tincidunt feugiat
              habitasse. Lectus maecenas ornare egestas lectus. Sit nunc
            </p>
          </div>

          <div className="flex flex-wrap justify-between col-span-3">
            {/* links */}
            <div className="mb-3 lg:mb-0">
              <h3 className="font-bold">About</h3>
              <div className="mt-3 lg:mt-5">
                <ul className="flex flex-col space-y-3">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/about-us">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/about-us">Tutorials</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Terms & Conditions </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Contact</h3>
              <div className="mt-3 lg:mt-5">
                <ul className="flex flex-col space-y-3">
                  <li className="flex gap-3 items-center">
                    <FaPhone className="text-purple text-[20px]" />{" "}
                    +8801700-000000
                  </li>
                  <li className="flex gap-3 items-center">
                    <IoMail className="text-purple text-[21px]" />{" "}
                    islamicmarriage@gmail.com
                  </li>
                  <li className="flex gap-3 items-center">
                    <IoLocationSharp className="text-purple text-[22px]" />{" "}
                    Banani, Dhaka-1217, <br /> Bangladesh
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:mx-auto">
            <div>
              <h3 className="font-bold">Social Media</h3>
              <div className="mt-3 lg:mt-5">
                <div className="my-3">
                  <ul className="flex flex-wrap gap-2 lg:gap-4 items-center">
                    <a className="">
                      <li className=" ">
                        <Image
                          className="mx-auto w-[35px]  rounded-md"
                          src={facebook}
                          height={10}
                          width={21}
                          alt="facebook"
                        />
                      </li>
                    </a>
                    <a className="">
                      <li className=" ">
                        <Image
                          className="mx-auto w-[35px]  rounded-md"
                          src={twitter}
                          height={10}
                          width={21}
                          alt="twitter"
                        />
                      </li>
                    </a>
                    <a className="">
                      <li className=" ">
                        <Image
                          className="mx-auto w-[35px]  rounded-md"
                          src={linkedin}
                          height={10}
                          width={21}
                          alt="linkedin"
                        />
                      </li>
                    </a>
                    <a className="">
                      <li className=" ">
                        <Image
                          className="mx-auto w-[35px]  rounded-md"
                          src={insta}
                          height={10}
                          width={21}
                          alt="instagram"
                        />
                      </li>
                    </a>
                  </ul>
                  <p className="text-[16px] py-3">
                    Download the app by clicking the link below :
                  </p>
                  <div className="flex  lg:flex-row gap-2 lg:gap-4 items-center">
                    <Image
                      className="w-[130px]"
                      src={google}
                      height={30}
                      width={55}
                      alt="google"
                    />{" "}
                    <Image
                      className="w-[130px]"
                      src={app}
                      height={30}
                      width={55}
                      alt="app"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="py-2">
        <div>
          <div className="flex items-center">
            <div className="w-[30%]">
              <div className="h-[2px]  w-full bg-[#111] my-2"></div>
            </div>
            <p className="text-center w-[40%]">@Copyright all right reserverd by <b>Islamic marriage</b>.</p>
            <div className="w-[30%]">
              <div className="h-[2px]  w-full bg-[#111] my-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
