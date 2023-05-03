import React, { useState } from "react";
import coverImage from "../../assets/homeCarousel/01.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  console.log(setError);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignUp = () => {};
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
              <h1 className="text-5xl font-bold  text-primary my-10">
                Please Register now!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  glass">
              <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control ">
                  <label className="label ">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered glass  text-white "
                    required
                  />
                </div>
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
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-white ">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="confirm password"
                    className="input input-bordered glass  text-white"
                    name="confirm"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-12 right-0 flex items-center px-2 bg-primary text-gray-300"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <AiFillEyeInvisible className="h-5 w-5 mt-7" />
                    ) : (
                      <AiFillEye className="h-5 w-5 mt-7" />
                    )}
                  </button>
                </div>

                <p className="text-error ml-2">{error}</p>

                <div className="form-control mt-6">
                  <button className="btn btn-primary mb-3 ">Register</button>
                </div>
                <small>
                  <p className="text-white">
                    Already have an account? Please
                    <Link to="/login">
                      <span className="mx-1 underline text-primary">Login</span>
                    </Link>
                  </p>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
