"use client";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas/register";
import Link from "next/link";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`,
        values
      );
      toast.success("Kayıt başarılı");
    } catch (error) {
      console.log(error);
      const errMsg = error?.response?.data?.message;
      console.log(errMsg);
      if (errMsg === "User already exists") {
        toast.error("Bu e-posta zaten kayıtlı!");
      } else {
        toast.error("Kayıt yapılamadı. Lütfen tekrar deneyin.");
      }
    }
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

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
      name: "password",
      type: "password",
      placeholder: "Your password ",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },

    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Password Again",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center items-center h-[80vh] w-full sm:w-1/2 mx-auto">
        <div className="text-center">
          <Title addClass="text-[40px]">Register</Title>
        </div>
        <form
          className=" flex flex-col gap-4 w-full px-3 mt-5 "
          onSubmit={handleSubmit}
        >
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <button className="btn-primary " type="submit">
            REGISTER
          </button>
        </form>
        <div className="flex flex-col gap-4 w-full mt-6 px-3 ">
          <Link
            href="/auth"
            className="text-start underline text-sm  text-secondary"
          >
            <span>Do you have a account ?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
