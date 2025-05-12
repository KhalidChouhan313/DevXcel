import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Auth() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white w-full h-screen flex items-center justify-center font-sans">
      <div className="md:w-1/2  w-full h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] max-w-md">
          <h2 className="text-3xl font-bold mb-6">Get Started Now</h2>

          <label htmlFor="name" className=" text-[1.4vw] font-[500]">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-[12px]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">Name is required</p>
          )}
          <label htmlFor="name" className="text-[1.4vw] font-[500]">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-[12px]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">Email is required</p>
          )}
          <label htmlFor="name" className="text-[1.4vw] font-[500]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-[12px]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">Password is required</p>
          )}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              {...register("agree", { required: true })}
            />
            <p className="font-bold">
              I agree to the{" "}
              <span className="underline cursor-pointer">terms & policy</span>
            </p>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm mb-2">You must agree</p>
          )}

          <button
            onClick={() => navigate("/dashboard")}
            type="submit"
            className="bg-green-800 text-white w-full py-2 rounded-md font-medium cursor-pointer"
          >
            Signup
          </button>

          <div className="my-4 border-t border-gray-300 relative mt-[7vh] mb-[7vh]">
            <span className="absolute left-1/2 -top-3 bg-white px-2 text-sm text-gray-500 transform -translate-x-1/2">
              or
            </span>
          </div>

          <div className="flex justify-center gap-4 mb-">
            <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
              <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                alt="Google"
              />
              Sign in with Google
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
              <img
                src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
                alt="Apple"
              />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center text-sm">
            Have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Sign In</span>
          </p>
        </form>
      </div>

      <div
        className="w-1/2 h-screen rounded-l-[30px] bg-gradient-to-b md:block hidden
       from-[#215148] to-[#3E5F4C] text-white p-15 flex flex-col justify-center"
      >
        <h2 className="text-[2.5vw] font-[600] mb-4 ">
          Welcome to AAOIFI taxonomy portal
        </h2>
        <p className="mb-4 py-[2vh] text-[18px] font-[500]">
          AAOIFI standards are now accessible at your fingertips!
        </p>
        <ul className="list-disc pl-[2vw] space-y-2 text-[18px]">
          <li>
            <b>Standards:</b> Browse all AAOIFI Standards in all translated{" "}
            <br />
            languages
          </li>
          <li>
            <b>Codified standards:</b> Browse the codified version of AAOIFI{" "}
            <br />
            standards
          </li>
          <li>
            <b>Master glossary:</b> Quickly find definitions
          </li>
          <li>
            <b>Advanced search:</b> Execute complex search queries
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Auth;
