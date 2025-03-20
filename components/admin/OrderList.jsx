import React from "react";

const OrderList = () => {
  return (
    <div className="h-[80vh]  w-full flex flex-col items-center justify-start py-8 ">
      <div className="w-full max-w-screen-xl px-4">
        <h1 className="text-3xl font-bold font-dancing text-center mb-8">
          Order Details
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white text-center">
            <thead>
              <tr className="bg-gray-900 text-gray-300 uppercase text-sm">
                <th className="px-6 py-3 ">PRODUCT</th>
                <th className="px-6 py-3 ">CUSTOMER</th>
                <th className="px-6 py-3 ">TOTAL</th>
                <th className="px-6 py-3 ">PAYMENT</th>
                <th className="px-6 py-3 ">STATUS</th>
                <th className="px-6 py-3 ">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-primary">
                <td className="px-6 py-4 space-x-3">21255966....</td>
                <td className="px-6 py-4">Mehmet Ul..</td>
                <td className="px-6 py-4">$18</td>
                <td className="px-6 py-4">Cash</td>
                <td className="px-6 py-4">Preparing</td>

                <td className="px-6 py-4">
                  <button className="btn-primary !bg-green-600">
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
