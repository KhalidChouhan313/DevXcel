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
    navigate("/dashboard");
  };

  return (
    <div className="bg-white w-full h-screen flex items-center justify-center font-sans">
      <div className="md:w-1/2  w-full h-[100vh]  flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] max-w-md ">
          <h2 className="text-[32px] font-bold mb-[3vh]">Get Started Now</h2>

          <label htmlFor="name" className=" text-[14px] font-[500]">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className="w-full  mb-[1vh] px-4 h-[6vh] border border-gray-300 rounded-[10px]
             placeholder:text-gray-300 font-semibold "
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">Name is required</p>
          )}
          <label htmlFor="email" className="text-[14px] font-[500]">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="w-full  mb-[1vh] px-4 h-[6vh] border border-gray-300 rounded-[10px]
             placeholder:text-gray-300 font-semibold"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">Email is required</p>
          )}
          <label htmlFor="password" className="text-[14px] font-[500]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
            className="w-full  mb-[1vh] px-4 h-[6vh] border border-gray-300 rounded-[10px]
             placeholder:text-gray-300 font-semibold"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">Password is required</p>
          )}
          <div className="flex items-center mb-6 mt-3">
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
            type="submit"
            className="bg-green-800 text-white w-full h-[32px] rounded-[10px] 
            text-[13px]
            font-medium cursor-pointer"
          >
            Signup
          </button>

          <div className="my-4 border-t border-gray-300 relative mt-[6vh] mb-[6vh]">
            <span className="absolute left-1/2 -top-3 bg-white px-2 text-sm text-gray-500 transform -translate-x-1/2">
              or
            </span>
          </div>

          <div className="flex justify-center gap-4 mb-">
            <button
              className="border cursor-pointer border-gray-300 w-[50vw] px-[2vw] h-[6vh] text-[1.5vh] font-bold
             rounded-[10px] flex items-center gap-2"
            >
              <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                alt="Google"
              />
              Sign in with Google
            </button>
            <button
              className="border cursor-pointer border-gray-300 w-[50vw] px-[2vw] h-[6vh] rounded-[10px] text-[1.5vh] font-bold
             flex items-center gap-2"
            >
              <img
                src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
                alt="Apple"
              />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center text-[14px  py-3 font-semibold">
            Have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Sign In</span>
          </p>
        </form>
      </div>

      <div
        className="w-1/2 h-screen rounded-l-[30px]  md:block hidden
       bg-gradient-to-b from-[#817A66] to-[#084C40] text-white flex items-center justify-center"
      >
        <div className="p-3 flex flex-col  items-start justify-center h-full px-[6vw]">
          {" "}
          <h2 className="text-[2vw] font-[700] mb-1 tracking-[3px] ">
            Welcome to AAOIFI taxonomy portal{" "}
          </h2>
          <p className=" mb-[1vh] py-[2vh] text-[18px] font-[500]">
            AAOIFI standards are now accessible at your fingertips!{" "}
          </p>
          <ul className="list-disc pl-[2vw] space-y-2 text-[18px] font-[500">
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
    </div>
  );
}

export default Auth;
