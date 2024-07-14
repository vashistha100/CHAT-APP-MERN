import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(inputs);
    await signup(inputs);
  };

  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-8 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              // onChange={(e) => {
              //   setInputs({ ...inputs, fullName: e.target.value });
              // }}
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              // onChange={(e) => {
              //   setInputs({ ...inputs, userName: e.target.value });
              // }}
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              // onChange={(e) => {
              //   setInputs({ ...inputs, password: e.target.value });
              // }}
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              // onChange={(e) => {
              //   setInputs({ ...inputs, confirmPassword: e.target.value });
              // }}
              onChange={handleInput}
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={onCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-dots loading-lg"></span>
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
