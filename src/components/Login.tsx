import { FormEvent, useState } from "react";
import Header from "./Header";
import Input from "./Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

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
            {/* <div className="bg-black w-full py-12 px-16 min-h-fit bg-opacity-70 rounded-md"> */}
            <header className="text-left">
              <h1 className="text-white font-bold mb-7 text-[2rem]">
                {isSignInForm ? "Sign in" : "Create an account"}
              </h1>
            </header>
            <form className="flex flex-col gap-4">
              {!isSignInForm && (
                <Input
                  label="Username"
                  onChange={(e: FormEvent) => setUsername(e.target.value)}
                  id="username"
                  type="text"
                  value={username}
                />
              )}
              <Input
                label="Email or mobile number"
                onChange={(e: FormEvent) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: FormEvent) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
              <button className="w-full py-[6px] px-4 bg-[#E50815] text-white rounded leading-7 font-medium hover:bg-red-700">
                {isSignInForm ? "Sign in" : " Sign up"}
              </button>
              {/* <p className="text-white text-opacity-70 text-base font-normal text-center">
                OR
              </p>
              <button className="w-full py-[6px] px-4 bg-[#333333] bg-opacity-70 text-white rounded leading-7 font-medium hover:bg-opacity-60">
                Use a Sign-In Code
              </button> */}
              <p className="text-white text-opacity-70 mb-4 text-base font-normal">
                {isSignInForm ? "New to Netflix?" : "Already registered?"}
                <a
                  className="text-white font-medium cursor-pointer ml-1 text-base"
                  onClick={toggleSignInForm}
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

export default Login;

{
  /* <label className=" absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"> */
}
