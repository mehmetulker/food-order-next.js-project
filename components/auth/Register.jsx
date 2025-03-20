"use client";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas/register";
import Link from "next/link";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";

const Register = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
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
          <Title addClass="text-[40px]">Login</Title>
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
        </form>
        <div className="flex flex-col gap-4 w-full mt-6 px-3 ">
          <button onClick={handleSubmit} className="btn-primary " type="submit">
            REGISTER
          </button>
          <Link
            href="/auth/login"
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
