import Carousel from "@/components/ui/Carousel";
import Campaigns from "@/components/ui/Campaigns";
import Menu from "@/components/product/Menu";

export default function Home() {
  return (
    <div className="text-center">
      <Carousel />
      <Campaigns />
      <Menu />
    </div>
  );
}
