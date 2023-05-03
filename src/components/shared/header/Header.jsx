import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useContext } from "react";
import logo from "../../../assets/logo/02-01.png";
import { NavLink } from "react-router-dom";
// import profile from "../../../assets/icon/profile.jpg";
import { AuthContext } from "../../../contexts/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" mx-auto   px-10 bg-black -mb-3 shadow-lg shadow-slate-400 ">
      <div className="navbar   text-white ">
        <div className="navbar-start">
          <img className="h-14 w-20 " src={logo} alt="" />
        </div>
        <div className="navbar-center text-2xl uppercase h-12 pr-10 hidden lg:flex">
          <ul className="pl-3 menu-horizontal px-1">
            <li className="ml-5">
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>

            <li className="ml-5  ">
              <NavLink
                to="/blogs"
                aria-label="blogs"
                title="blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
            {user ? (
              <>
                <li className="ml-5">
                  <NavLink
                    aria-label="logOut"
                    title="logOut"
                    onClick={handleLogOut}
                    className={({ isActive }) =>
                      isActive ? "default" : "active"
                    }
                  >
                    LogOut
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="ml-5">
                  <NavLink
                    to="/logIn"
                    aria-label="logIn"
                    title="logIn"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    LogIn
                  </NavLink>
                </li>
                <li className="ml-5">
                  <NavLink
                    to="/register"
                    aria-label="register"
                    title="register"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    REGISTER
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar-end ">
          <div>
            <div className="flex items-center justify-between  mr-5 relative text-2xl">
              <AiFillHeart className="text-red-600 " />

              <AiOutlineHeart />
            </div>
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img title={user?.displayName} src={user?.photoURL} />
            </div>
          </label>
          {/* <Link to="/blogs">
          <button className="btn btn-primary">Learn More</button>
        </Link> */}
        </div>

        {/* <div className="ml-10 mr-5 lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="navbar-start">
                      <img className="" src={logo} alt="" />
                    </div>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <div className="navbar-center  lg:flex">
                    <ul className="pl-3  px-1">
                      <li className="ml-5 mb-3">
                        <NavLink
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Home
                        </NavLink>
                      </li>

                      <li className="ml-5 mb-3">
                        <NavLink
                          to="/blogs"
                          aria-label="blogs"
                          title="blogs"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Blogs
                        </NavLink>
                      </li>
                      <li className="ml-5">
                        <NavLink
                          to="/logIn"
                          aria-label="logIn"
                          title="logIn"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          LogIn
                        </NavLink>
                      </li>
                      <li className="ml-5">
                        <NavLink
                          to="/register"
                          aria-label="register"
                          title="register"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          REGISTER
                        </NavLink>
                      </li>

                      <li className="ml-5">
                        <NavLink
                          to="/logOut"
                          aria-label="logOut"
                          title="logOut"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Log Out
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
    // <div>
    //   <div className="static ">
    //     <div className="absolute top-0 w-full">
    //       <NavBar />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
