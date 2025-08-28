"use client";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/login";
import Link from "next/link";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const router = useRouter();
  const onSubmit = async (values, actions) => {
    try {
      console.log(values);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
        values
      );

      toast.success("işlem yapıldı");
      router.push("/admin/profile");
      actions.resetForm();
    } catch (error) {
      console.log(error);
      toast.error("kayıt yapılamadı");
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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

export default AdminLogin;
