import Title from "../ui/Title";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="container mx-auto mt-16 mb-16">
      <div className="flex flex-col items-center mb-16">
        <Title addClass="text-4xl">Our Menu</Title>
        <div className="mt-10 gap-3">
          <button className=" px-6 py-2 bg-secondary rounded-3xl text-white ">
            All
          </button>
          <button className=" px-6 py-2rounded-3xl  ">Burger</button>
          <button className=" px-6 py-2rounded-3xl  ">Pizza</button>
          <button className=" px-6 py-2rounded-3xl  ">Drink</button>
          <button className=" px-6 py-2rounded-3xl  ">Burger</button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default Menu;
