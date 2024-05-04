import Container from "@/Components/shared/Container";
import data from "../../Components/data/community.json";
import Link from "next/link";
import Image from "next/image";
import Ratings from "@/Components/Ratings/Ratings";
import { NextPage } from "next";



const CommunityCenter: NextPage = () => {
  return (
    <div className="my-4 lg:my-6">
      <Container>
        <div className="grid cursor-pointer grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {data.map((item , i) => (
            <div className=" " key={i}>
              <Image
                className="w-full h-[160px] md:h-[185px] lg:h-[200px]"
                src={item.image}
                height={70}
                width={120}
                alt="community-center"
              />
              <Link href="/single-community">
                <div className="space-y-2 mt-2 p-2 mb-4 lg:mb-6">
                  <h1 className="font-semibold text-[15px]">{item.name}</h1>
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] text-[#9A236F]">
                      ${item.current}
                    </p>
                    <p className="text-[14px] text-slate-400">${item.old}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ratings ratings={5} />
                    <span className="text-slate-500 text-[14px]">(65)</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mx-auto">
          <button className="border border-purple mx-auto rounded-md py-2 px-5 font-medium">
            View All Community Center
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CommunityCenter;
