import React, { useState } from "react";
import coverImage from "../../assets/homeCarousel/02.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LogIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  console.log(setError);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignIn = () => {};
  const handlePasswordReset = () => {};
  const handleGoogleSignIn = () => {};
  const handleGithubSignIn = () => {};
  return (
    <div>
      <div
        className="h-full w-auto bg-cover  pb-24"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
        }}
      >
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold  text-primary my-5">
                Please Login now!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  glass">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered glass  text-white"
                    required
                  />
                </div>

                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered  glass  text-white"
                    name="password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-12 right-0 flex items-center px-2 text-gray-300"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <AiFillEyeInvisible className="h-5 w-5 mt-7" />
                    ) : (
                      <AiFillEye className="h-5 w-5 mt-7" />
                    )}
                  </button>
                </div>
                <div className="form-control relative ">
                  <label className="label ">
                    <a
                      onClick={handlePasswordReset}
                      href="#"
                      className="label-text-alt link link-hover text-white"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>

                <p className="text-error ml-2">{error}</p>

                <div className="form-control mt-4">
                  <button className="btn btn-primary mb-3 ">Login</button>
                </div>
                <small>
                  <p className="text-white">
                    Have no account? Please
                    <Link to="/register">
                      <span className="mx-1 underline text-primary">
                        Register
                      </span>
                    </Link>
                    first
                  </p>
                </small>
              </form>
              <div className="flex mx-auto gap-5 mb-5">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-red-700 text-white mb-3"
                >
                  <FaGoogle className="mx-2 text-lg text-white" />
                  Google
                </button>
                <button
                  onClick={handleGithubSignIn}
                  className="btn bg-black text-white "
                >
                  <FaGithub className="mx-2 text-lg text-white" />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
