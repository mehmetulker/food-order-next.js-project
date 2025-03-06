import Carousel from "@/components/ui/Carousel";
import Campaigns from "@/components/ui/Campaigns";
import Menu from "@/components/product/Menu";
import About from "@/components/about/About";
import Item from "@/components/product/Item";

export default function Home() {
  return (
    <div className="text-center">
      <Carousel />
      <Campaigns />
      <Menu />
      <About />
      <Item />
    </div>
  );
}
