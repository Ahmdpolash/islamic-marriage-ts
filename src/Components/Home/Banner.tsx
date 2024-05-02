import Link from "next/link";
import banner from "../../assets/banner.jpeg";
import Container from "../shared/Container";
const Banner = () => {
  return (
    <div>
      <div
        className="relative h-[40vh] md:h-[70vh] lg:h-[85vh] w-full"
        style={{
          backgroundImage: `url("https://i.ibb.co/WVdtY83/banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>

        <Container>
          <div className="relative hidden md:block lg:block md:top-4">
            <div className=" border rounded-md absolute right-0 p-6 lg:p-10  bg-white lg:top-24">
              <div className="space-y-1 lg:space-y-2">
                <form>
                  <div className="flex justify-between mb-2 lg:mb-3 flex-col lg:flex-row items-center gap-4">
                    <span className="text-dark w-full lg:w-1/2">
                      Types of Biodata
                    </span>
                    <select
                      className="py-2 outline-none w-full lg:w-1/2 px-4 text-white rounded-md bg-purple"
                      name="biodata"
                      id="biodata"
                    >
                      <option value="">
                        All Biodata
                      </option>
                      <option value="">Boy biodata</option>
                      <option value="">girl biodata</option>
                    </select>
                  </div>

                  <div className="flex justify-between mb-2 flex-col lg:flex-row items-center gap-4">
                    <span className="text-dark  w-full lg:w-1/2 ">
                      Marital status
                    </span>
                    <select
                      className="py-2 outline-none w-full lg:w-1/2 mb-2 px-4 text-white rounded-md bg-purple"
                      name="status"
                      id="status"
                    >
                      <option  value="">
                        All Status
                      </option>
                      <option value="married">Married</option>
                      <option value="single">Single</option>
                    </select>
                  </div>

                  <div className="flex mb-3 flex-col lg:flex-row items-center gap-4">
                    <span className="text-dark w-full lg:w-1/2 ">
                      Bio Data Number
                    </span>
                    <input
                      className="py-2 px-4  w-full lg:w-1/2 rounded-md border-2 border-slate-300 focus:outline-blue-400 shadow-md"
                      type="text"
                      name="number"
                      id=""
                    />
                  </div>

                  <div className="block text-end ">
                    <button
                      type="submit"
                      className="border w-full lg:w-[48%] rounded-md border-borderColor text-purple py-[5px] px-"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
