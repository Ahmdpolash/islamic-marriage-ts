import React from "react";
import Container from "../shared/Container";
import data from "../data/category.json";
import img1 from "../../assets/category/gromms & brides.png";
import img2 from "../../assets/category/grooms.png";
import img3 from "../../assets/category/brides.png";
import img4 from "../../assets/category/marriage.png";
import Link from "next/link";
import Image from "next/image";

const images = [img1, img2, img3, img4];

const TotalCategory = () => {
  return (
    <div>
      <Container>
        {/* header */}
        <div className="text-center mx-auto my-4 lg:my-6">
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur. Posuere laoreet <br /> donec
            nibh quam. Tempus leo accumsan non iaculis. Nunc <br /> ullamcorper
            diam nibh eleifend eu vitae. Felis ipsum vivamus <br /> et egestas
            orci leo.
          </p>

          <div className="space-y-3 flex flex-col mt-3 lg:mt-5">
            <Link href="/">
              <button className="rounded-md border border-[#2D1843] py-[5px] px-5 tracking-wider">
                Create your own biodata
              </button>
            </Link>
            <Link href="/">
              <button className="rounded-md border border-[#2D1843] py-[5px] px-5 tracking-wider">
                How to create your biodata (Video)
              </button>
            </Link>
          </div>
        </div>

        {/* category */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-7 my-10 pt-5">
          {data.map((category, idx) => (
            <div
              key={idx}
              className="border shadow-md border-borderColor rounded-md p-2 lg:p-4"
            >
              <div className="space-y-1 lg:space-y-2 text-center">
                <Image
                  className="mx-auto w-full h-[90px] md:h-[115px] lg:h-[125px] lg:w-[140px]"
                  src={category.image}
                  height={60}
                  width={80}
                  alt="bride"
                />
                <div className="py-2 pt-2">
                  <h1 className="font-bold text-xl lg:text-2xl text-dark">
                    {category.number}
                  </h1>
                  <h4 className="text-[18px] lg:text-[20px] font-normal">
                    {category.category}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TotalCategory;
