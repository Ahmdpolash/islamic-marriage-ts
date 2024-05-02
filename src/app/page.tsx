import Banner from "@/Components/Home/Banner";
import NewMember from "@/Components/Home/NewMember";
import PremiumMember from "@/Components/Home/PremiumMember";
import TotalCategory from "@/Components/Home/TotalCategory";
import Trusted from "@/Components/Home/Trusted";

export default function Home() {
  return (
    <div>
      <Banner />
      <TotalCategory />
      <PremiumMember />
      <Trusted />
      <NewMember />
    </div>
  );
}
