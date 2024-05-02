import Container from "@/Components/shared/Container";
import data from "../../Components/data/kazioffice.json";
import Link from "next/link";
import Image from "next/image";
import Ratings from "@/Components/Ratings/Ratings";

interface KaziOffice {
  image: string;
  name: string;
  owner: string;
  current: number;
  old: number;
}

const KaziOffice: React.FC = () => {
  return (
    <div className="my-4 lg:my-6">
      <Container>
        <div className="grid cursor-pointer grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {data.map((item: KaziOffice, i: number) => (
            <div className=" " key={i}>
              <Image
                className="w-full h-[160px] md:h-[185px] lg:h-[200px]"
                src={item.image}
                height={70}
                width={120}
                alt="community-center"
              />
              <Link href="/single-kazi-office">
                <div className="space-y-2 mt-2  text-dark p-2 mb-4 lg:mb-6">
                  <h1 className="font-semibold text-[15px] tracking-wide">
                    {item.name}
                  </h1>
                  <h3 className="font-medium text-slate-600 text-[14px]">
                    {item.owner}
                  </h3>
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
            View All Kazi Office
          </button>
        </div>
      </Container>
    </div>
  );
};

export default KaziOffice;
