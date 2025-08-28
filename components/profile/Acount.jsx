"use client";

import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schemas/profile";
import axios from "axios";
import { toast } from "react-toastify";

function Account({ user }) {
  console.log("Account", user._id);

  const onSubmit = async (values, actions) => {
    console.log("values", values); // 👈 Test için
    console.log("user", user._id);

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user._id}`,
        {
          fullName: values.fullName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          address: values.address,
          job: values.job,
          bio: values.bio,
        }
      );
      toast.success("Kayıt başarılı");
    } catch (error) {
      console.log(error);
      toast.error("Kayıt yapılamadı. Lütfen tekrar deneyin.");
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: user?.fullName || "",
      phoneNumber: user?.phoneNumber || "",
      email: user?.email || "",
      job: user?.job || "",
      address: user?.address || "",
      bio: user?.bio || "",
    },
    onSubmit,
    validationSchema: profileSchema,
  });

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    formik;

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "address", // 👈 düzeltildi
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];

  return (
    <>
      <Title addClass="text-4xl font-dancing mb-8 text-center sm:text-left">
        Account Setting
      </Title>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>

        <button className="btn-primary mt-6 py-3 text-lg block" type="submit">
          UPDATE
        </button>
      </form>
    </>
  );
}

export default Account;
