import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="max-w-lg p-3 mx-auto ">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="p-3 rounded-lg"
          id="username"
        />

        <input
          type="email"
          placeholder="email"
          className="p-3 rounded-lg"
          id="email"
        />
        <input
          type="current-password"
          placeholder="password"
          className="p-3 rounded-lg"
          id="password"
        />

        <button className="p-3 text-white rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
        <div className="flex gap-2 mt-5">
          <p>Don't have an account? </p>
          <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
