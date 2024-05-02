import { TbMessage2Heart } from "react-icons/tb";
import { PiHandbagSimple } from "react-icons/pi";
import { ThumbsDown } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-5 w-full -z-20 lg:max-w-6xl mt-10 lg:mt-0 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* box-one */}

        <div className="hover:bg-violet group hover:shadow-violet/70 border  cursor-pointer shadow-md rounded-lg border-slate-200 duration-300 flex items-center justify-center py-5 px-7">
          <div className="space-y-2 mx-auto text-center  text-purple ">
            <h1 className="text-xl lg:text-2xl font-semibold group-hover:text-white">
              0
            </h1>
            <h2 className="text-[16px] tracking-wide group-hover:text-white lg:text-[17px] font-semibold">
              There is a connection
            </h2>
            <p className="font-normal  text-[14px] group-hover:text-white leading-7 tracking-wide text-deepDark">
              Each biodata requires 1 connection to view contact information
            </p>
            <div className="mx-auto text-center my-2 px-2 pt-2">
              <button className="border-2 border-purple w-full font-medium rounded-3xl py-2 px-5 group-hover:text-white group-hover:border-white ">
                Send
              </button>
            </div>
          </div>
        </div>
        {/* box-two */}

        <div className="hover:bg-violet group hover:shadow-violet/70 border  cursor-pointer shadow-md rounded-lg border-slate-200 duration-300 flex items-center justify-center py-5 px-6">
          <div className="space-y-2 mx-auto text-center  text-purple ">
            <h1 className="text-xl lg:text-2xl font-semibold group-hover:text-white">
              0
            </h1>
            <h2 className="text-[16px] tracking-wide group-hover:text-white lg:text-[17px] font-semibold">
              Number of biodata visits
            </h2>
            <p className="font-normal  text-[14px] group-hover:text-white leading-7 tracking-wide text-deepDark">
              Number of times your biodata has been visited
            </p>
            <div className="mx-auto flex items-center justify-between text-center my-2 px-2 pt-2">
              <div className="flex flex-col space-y-2">
                <button className="text-[11px] tracking-wide bg-violet p-[5px] rounded-lg group-hover:bg-white group-hover:text-violet  text-white">
                  Last 30 days
                </button>
                <span className="group-hover:text-white">0</span>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="text-[11px] tracking-wide bg-violet p-[5px] rounded-lg group-hover:bg-white group-hover:text-violet  text-white">
                  Last 7 days
                </button>
                <span className="group-hover:text-white">0</span>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="text-[11px] tracking-wide bg-violet p-[5px] rounded-lg group-hover:bg-white group-hover:text-violet  text-white">
                  Today
                </button>
                <span className="group-hover:text-white">0</span>
              </div>
            </div>
          </div>
        </div>
        {/* box-three */}

        <div className="hover:bg-violet group hover:shadow-violet/70 border bg-[#F5E9F1]  cursor-pointer shadow-md rounded-lg border-slate-200 duration-300 flex items-center justify-center py-5 px-6">
          <div className="space-y-2 mx-auto text-center  text-purple ">
            <h1 className="text-xl lg:text-2xl font-semibold group-hover:text-white">
              0
            </h1>
            <h2 className="text-[16px] tracking-wide group-hover:text-white lg:text-[17px] font-semibold">
              There is a connection
            </h2>
            <p className="font-normal  text-[14px] group-hover:text-white leading-7 tracking-wide text-deepDark">
              So many people have favorited your biodata
            </p>
          </div>
        </div>

        {/* box-four */}
        <div className="hover:bg-violet group hover:shadow-violet/70 border  cursor-pointer shadow-md rounded-lg border-slate-200 duration-300  py-3 px-4">
          <div className="space-y-2  flex justify-between items-center">
            <div>
              <TbMessage2Heart className="text-[30px] group-hover:text-white text-[#522B79] " />
            </div>
            <div className="space-y-2 text-right">
              <h1 className="text-xl  text-purple lg:text-2xl font-semibold group-hover:text-white">
                0
              </h1>
              <h2 className="text-[16px] tracking-wide  text-purple group-hover:text-white lg:text-[17px] font-semibold">
                Favourites List
              </h2>
              <p className="font-normal  text-[14px] group-hover:text-white leading-7 tracking-wide text-deepDark">
                List biodata of your choice.
              </p>
            </div>
          </div>
        </div>

        {/* box-five */}
        <div className="hover:bg-violet group hover:shadow-violet/70 border  cursor-pointer shadow-md rounded-lg border-slate-200 duration-300  py-3 px-4">
          <div className="space-y-2  flex justify-between items-center">
            <div>
              <ThumbsDown className="text-[30px] group-hover:text-white text-[#522B79] " />
            </div>
            <div className="space-y-2 text-right">
              <h1 className="text-xl  text-purple lg:text-2xl font-semibold group-hover:text-white">
                0
              </h1>
              <h2 className="text-[16px] tracking-wide  text-purple group-hover:text-white lg:text-[17px] font-semibold">
                List of dislikes
              </h2>
              <p className="font-normal  text-[14px] group-hover:text-white leading-7 tracking-wide text-deepDark">
                List biodata of your choice.
              </p>
            </div>
          </div>
        </div>

        {/* box-six */}
        <div className="hover:bg-violet group hover:shadow-violet/70 border  cursor-pointer shadow-md rounded-lg border-slate-200 duration-300  py-3 px-4">
          <div className="space-y-2  flex justify-between items-center">
            <div>
              <PiHandbagSimple className="text-[30px] group-hover:text-white text-[#522B79] " />
            </div>
            <div className="space-y-2 text-right">
              <h1 className="text-xl  text-purple lg:text-2xl font-semibold group-hover:text-white">
                0
              </h1>
              <h2 className="text-[16px] tracking-wide  text-purple group-hover:text-white lg:text-[17px] font-semibold">
                My Purchases
              </h2>
              <p className="font-normal  text-[14px] group-hover:text-white leading-7 tracking-wide text-deepDark">
                All information regarding your purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
