import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col sm:flex-row items-center justify-center">
      <div className="w-3/4 h-full flex flex-col items-center justify-center">
        <div className="container  p-4 ">
          <div className=" overflow-x-auto scrollbar-color-primary">
            <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-900 text-gray-300 uppercase text-sm">
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-left">Extras</th>
                  <th className="px-6 py-3 text-left">Price</th>
                  <th className="px-6 py-3 text-left">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-primary   ">
                  <td className="px-6 py-4 flex items-center space-x-3">
                    <Image
                      src="/images/f1.png"
                      alt="Pizza"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span>Good Pizza</span>
                  </td>
                  <td className="px-6 py-4">Mayonez, Acı Sos, Ketçap</td>
                  <td className="px-6 py-4">$20</td>
                  <td className="px-6 py-4">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  w-full sm:w-1/4  h-full bg-secondary justify-center items-center  text-white ">
        <Title addClass="text-4xl">CART TOTAL</Title>
        <div className="text-base mt-5 gap-2">
          <p>
            <span className="font-semibold"> Subtotal</span>:
            <span className="text-slate-400">$20</span>
          </p>
          <p>
            <span className="font-semibold"> Discount</span>:
            <span className="text-slate-400">$00.0</span>
          </p>
          <p>
            <span className="font-semibold"> Total</span>:
            <span className="text-slate-400">$20</span>
          </p>
          <button className="btn-primary mt-5">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
