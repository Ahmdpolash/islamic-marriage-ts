import React from "react";
import Container from "../shared/Container";
import { PiHandHeartThin } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { VscLock } from "react-icons/vsc";

const Trusted = () => {
  return (
    <div>
      <Container>
        <div className="text-center">
          <h2 className="font-bold text-[18px]  lg:text-[24px] text-purple tracking-wider">
            Trusted by Millions
          </h2>
          <p className="my-2 font-medium">
            Love doesn make the world go around. Love is what makes the ride
            worthwhile. Millions of Active Matrimonial <br /> users around the
            world find their true love and partners from this site. We are
            always there to help and find you the <br /> suitable match for
            yourself.
          </p>
        </div>

        {/* box grid */}
        <div className="my-4 lg:my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-7">
          <div className="bg-[#121212] lg:h-24 rounded-md text-white p-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <PiHandHeartThin className="text-[22px] text-white" />
              <h2 className="font-bold text-xl">Best match</h2>
            </div>
          </div>
          <div className="bg-[#121212] lg:h-24 rounded-md text-white p-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <MdOutlineVerifiedUser className="text-[21px] text-white" />
              <h2 className="font-bold text-xl">Verified profile</h2>
            </div>
          </div>
          <div className="bg-[#121212] lg:h-24 rounded-md text-white p-4 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <VscLock className="text-[21px] text-white" />

              <h2 className="font-bold text-xl">100% Privacy</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trusted;
