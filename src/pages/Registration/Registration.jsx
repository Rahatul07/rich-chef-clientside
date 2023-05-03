import coverImage from "../../assets/homeCarousel/01.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Registration = () => {
  const { user, createUser, updateUserProfile } = useContext(AuthContext);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignUp = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(name, email, password, confirm);
    if (password !== confirm) {
      setError("Your password does not match");
      return;
    } else if (!/^(?=.*[0-9]).*$/.test(password)) {
      setError("Password must contain at least one Digit.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(name)
          .then((updateName) => {
            console.log(user, updateName);
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "User has been created successfully!",
        });
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

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
