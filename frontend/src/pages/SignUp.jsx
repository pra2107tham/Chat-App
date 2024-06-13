import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-2xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white ">
          SignUp
          <span className=" text-cyan-300 font-thin "> chatapp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </label>
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </label>
          <label className="form-control w-full max-w-xs mt-4">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </label>
          <div className="mt-2">
            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />
          </div>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-red-300 mb-4 mt-4 inline-block gap-2"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
