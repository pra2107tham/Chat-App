import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-2xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white ">
          SignUp
          <span className=" text-cyan-300 font-thin "> chatapp</span>
        </h1>
        <form>
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="text"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <div className="mt-2">
          <GenderCheckbox />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-red-300 mb-4 mt-4 inline-block gap-2"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-active mx-32 ">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
