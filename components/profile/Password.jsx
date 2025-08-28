"use client";
import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schemas/newPassword";
import axios from "axios";
import { toast } from "react-toastify";

function Password({ user }) {
  console.log("Account", user._id);

  const onSubmit = async (values, actions) => {
    console.log("values", values); // 👈 Test için
    console.log("user", user._id);

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/${user._id}`,
        {
          password: values.password,
          confirmPassword: values.confirmPassword,
        }
      );
      toast.success("Kayıt başarılı");
    } catch (error) {
      console.log(error);
      toast.error("Kayıt yapılamadı. Lütfen tekrar deneyin.");
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        password: user?.password || "",
        confirmPassword: user?.confirmPassword || "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your password ",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },

    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <>
      <Title addClass="text-4xl font-dancing mb-8 text-center sm:text-left">
        Password
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
        <button className="btn-primary mt-6  py-3 text-lg block" type="submit">
          UPDATE
        </button>
      </form>
    </>
  );
}

export default Password;
