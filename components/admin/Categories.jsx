import React from "react";
import Input from "../form/Input";
import { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([
    { name: "Pizza" },
    { name: "Burger" },
    { name: "Pasta" },
    { name: "Salad" },
    { name: "Dessert" },
  ]);
  return (
    <div className="h-[80vh]  w-full flex flex-col items-center justify-start py-8 ">
      <div className="w-full max-w-screen-xl px-4">
        <h1 className="text-4xl font-bold font-dancing text-center mb-8">
          Catagories
        </h1>
        <div
          className="flex gap-4 items-center justify-between
          flex-col md:flex-row"
        >
          <Input placeholder="Add a new Category..." />
          <button className="btn-primary" placeholder="Add a new Category...">
            Add
          </button>
        </div>

        <div className="flex items-center justify-between py-8 ">
          <div className="text-xl">Pizza</div>
          <div className="btn-danger">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
