import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-8 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
