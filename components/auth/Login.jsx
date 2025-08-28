"use client";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/login";
import Link from "next/link";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  console.log("login", session);
  const router = useRouter();

  const onSubmit = async (values, actions) => {
    try {
      const { email, password } = values;

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res.ok) {
        toast.success("Giriş başarılı");
        actions.resetForm();
        router.push("/profile");
      } else {
        toast.error("E-posta veya şifre hatalı");
      }
    } catch (error) {
      console.error("Hata:", error);
      toast.error("Bir hata oluştu");
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
      placeholder: "Your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center h-[80vh] w-full sm:w-1/2 mx-auto">
        <div className="text-center">
          <Title addClass="text-[40px]">Login</Title>
        </div>
        <form
          className="flex flex-col gap-4 w-full px-3 mt-5"
          onSubmit={handleSubmit}
          method="post"
        >
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
          <button className="btn-primary" type="submit">
            LOGIN
          </button>
        </form>

        <div className="flex flex-col gap-4 w-full mt-6 px-3">
          <button
            onClick={() => signIn("github", { callbackUrl: "/profile" })}
            className="btn-secondary flex items-center justify-center gap-1"
            type="button"
          >
            <span className="text-2xl">
              <FaGithub />
            </span>
            GITHUB
          </button>

          <Link
            href="/auth/register"
            className="text-start underline text-sm text-secondary"
          >
            <span>Do you not have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
