import Container from "@/Components/shared/Container";
import Image from "next/image";
import banner from "../../assets/about/about.png";
import icon1 from "../../assets/about/icon1.png";
import icon2 from "../../assets/about/icon2.png";
import icon3 from "../../assets/about/icon3.png";
import icon4 from "../../assets/about/icon4.png";
import HappyCouple from "@/Components/about-us/HappyCouple";

interface AboutUsProps {
  // Define props here if any
}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <div className="my-4">
      <Container>
        <div className="lg:h-[85vh] w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="order-2 lg:order-1 space-y-2 lg:space-y-3">
            <h2 className="text-[20px] md:text-2xl lg:text-3xl font-semibold text-dark">
              Our Story
            </h2>
            <p className="text-dark">
              Launced in 2015, Exclusive is South Asias premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="text-dark">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div className="max-w-xl order-1 lg:order-2 mx-auto">
            <Image
              className="h-full w-full"
              src={banner}
              width={250}
              height={150}
              alt="about-us"
            />
          </div>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5 lg:mt-8">
          <div className="border space-y-2 rounded-md border-dark p-4 mx-auto text-center text-dark">
            <Image
              className="mx-auto  w-[75px]"
              src={icon1}
              height={40}
              width={40}
              alt="search biodata"
            />
            <div className="space-y-1">
              <h2 className="font-bold text-xl lg:text-2xl">Search Biodata</h2>
              <p>
                You can easily search biodata using many filters including age,
                upazila, profession, educational qualification.
              </p>
            </div>
          </div>
          <div className="border space-y-2 rounded-md border-dark p-4 mx-auto text-center text-dark">
            <Image
              className="mx-auto  w-[75px]"
              src={icon2}
              height={40}
              width={40}
              alt="search biodata"
            />
            <div>
              <h2 className="font-bold text-xl lg:text-2xl">Create Biodata</h2>
              <p>
                You can easily create a biodata on Islamic Marriage completely
                free of cost within some steps.
              </p>
            </div>
          </div>
          <div className="border space-y-2 rounded-md border-dark p-4 mx-auto text-center text-dark">
            <Image
              className="mx-auto  w-[75px]"
              src={icon3}
              height={40}
              width={40}
              alt="search biodata"
            />
            <div className="space-y-1">
              <h2 className="font-bold text-xl lg:text-2xl">
                Contact with guardians
              </h2>
              <p>
                If someone likes your biodata or you like someone biodata you
                can directly contact their parent.
              </p>
            </div>
          </div>
          <div className="border space-y-2 rounded-md border-dark p-4 mx-auto text-center text-dark">
            <Image
              className="mx-auto  w-[75px]"
              src={icon4}
              height={40}
              width={40}
              alt="search biodata"
            />
            <div className="space-y-1">
              <h2 className="font-bold text-xl lg:text-2xl">Get married</h2>
              <p>
                You can easily search biodata using many filters including age,
                upazila, profession, educational qualification.
              </p>
            </div>
          </div>
        </div>

        {/* Happy couple */}
        <div className="mt-5 lg:mt-8">
          <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-semibold">
            Happy couple
          </h1>

          <div>
            <HappyCouple />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
