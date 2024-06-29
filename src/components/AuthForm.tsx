import { ChangeEvent, FormEvent, useState } from "react";
import Header from "./Header";
import Input from "./Input";
import { validateForm } from "../utils/validateForm";

export interface FormData {
  username: string;
  email: string;
  password: string;
}
export interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

const AuthForm = () => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   การส่ง Form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // ป้องกันไม่ให้ web reload
    e.preventDefault();

    // ส่งข้่อมูลที่กรอกจาก form ไป validate ที่ function validate
    const errors = validateForm(formData, isSignInForm);

    // ถ้า function validate return เป็น {} ซี่งก็คือ keys.length = 0 แปลว่าไม่มี error
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid:", formData);
    } else {
      // ถ้ามี error ให้เก็บไว้ใน state error
      setErrors(errors);
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  console.log(errors);
  return (
    <div
      className="relative flex items-center justify-center min-h-dvh h-dvh bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/1e7b4efa-4a36-4519-86cc-a8f8bcb7f078/TH-th-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      }}
    >
      <div className="bg-black w-full h-full lg:bg-opacity-60 ">
        <Header />
        <div className="mb-12 max-w-md mx-auto">
          <div className="bg-black w-full py-12 px-16 min-h-[700px] bg-opacity-70 rounded-md">
            <header className="text-left">
              <h1 className="text-white font-bold mb-7 text-[2rem]">
                {isSignInForm ? "Sign in" : "Create an account"}
              </h1>
            </header>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {!isSignInForm && (
                <Input
                  label="Username"
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  error={errors.username}
                />
              )}
              <Input
                label="Email or mobile number"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
              />

              <button className="w-full py-[6px] px-4 bg-[#E50815] text-white rounded leading-7 font-medium hover:bg-red-700">
                {isSignInForm ? "Sign in" : " Sign up"}
              </button>
              {isSignInForm && (
                <>
                  <p className="text-white text-opacity-70 text-base font-normal text-center">
                    OR
                  </p>
                  <button className="w-full py-[6px] px-4 bg-[#333333] bg-opacity-70 text-white rounded leading-7 font-medium hover:bg-opacity-60">
                    Use a Sign-In Code
                  </button>
                </>
              )}
              <p className="text-white text-opacity-70 mb-4 text-base font-normal">
                {isSignInForm ? "New to Netflix?" : "Already registered?"}
                <a
                  onClick={toggleSignInForm}
                  className="text-white font-medium cursor-pointer ml-1 text-base"
                >
                  {isSignInForm ? "Sign up now" : "Sign in now"}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
