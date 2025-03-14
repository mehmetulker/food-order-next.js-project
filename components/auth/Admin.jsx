"use client";
import { useFormik } from "formik";
import { adminSchema } from "@/schemas/admin";
import Link from "next/link";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { FaGithub } from "react-icons/fa";

const AdminLogin = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your password ",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-center items-center h-[80vh] w-full sm:w-1/2 mx-auto">
        <div className="text-center">
          <Title addClass="text-[40px]">Admin Login</Title>
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
            LOGIN
          </button>
          <button
            onClick={handleSubmit}
            className="btn-secondary  flex items-center justify-center gap-1"
            type="submit"
          >
            <span className="text-2xl">
              <FaGithub />
            </span>
            GITHUB
          </button>
          <Link
            href="/auth/register"
            className="text-start underline text-sm  text-secondary"
          >
            <span>Do you no have a account ?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
