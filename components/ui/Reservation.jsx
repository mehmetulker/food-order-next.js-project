import React from "react";
import Title from "./Title";
import Input from "../form/Input";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Fone  Number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your email Adress",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How many Persons",
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "How many Persons",
    },
  ];
  return (
    <div className="container mx-auto  max-w-screen-xl py-12  ">
      <Title addClass="text-[40px] font-dancing mb-10 px-5 text-center sm:text-start">
        Book A Table
      </Title>
      <div className="flex justify-between  flex-wrap gap-10">
        <form className="w-full lg:flex-1 px-5">
          <div className="flex flex-col gap-5">
            {inputs.map((input) => (
              <Input key={input.id} input={input} />
            ))}
          </div>
          <button className="btn-primary mt-4">BOOK NOW</button>
        </form>
        <div className="lg:flex-1 flex-1 px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228568.21036789953!2d28.978358890345554!3d41.0082376095232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e1!3m2!1str!2str!4v1734379570931!5m2!1str!2str"
            width="100%"
            height="450"
            className="border-0 rounded-lg sm:h-full "
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
