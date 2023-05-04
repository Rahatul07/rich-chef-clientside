import React from "react";
import coverImage from "../../assets/homeCarousel/05.png";
import { FaPrint } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blogs = () => {
  return (
    <div>
      <div
        className="h-full w-auto bg-cover  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
        }}
      >
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <div className="flex px-20 items-center mt-20 justify-center">
              <button
                onClick={toPdf}
                className="group rounded-2xl flex py-3 px-3 gap-x-3 items-center bg-primary font-bold text-lg text-white relative overflow-hidden"
              >
                DOWNLOAD
                <FaPrint className="w-7 h-7" />
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 reounded-2xl"></div>
              </button>
            </div>
          )}
        </Pdf>
        <div ref={ref} className="w-10/12 mx-auto mt-20  text-grapy-300">
          <h1 className="text-5xl text-primary font-bold text-center pb-10 underline">
            SOME ESSENTIAL QUESTIONS AND ANSWERS
          </h1>
          <div className=" mb-10">
            <h1 className="text-gray-300 text-2xl font-bold ">
              01. What are the differences between uncontrolled and controlled
              components?
            </h1>
            <p className="text-gray-300 ml-5 mt-2">
              As far as I know that the key differences between uncontrolled and
              controlled components in React are that controlled components
              manage their own state and update the state when the user
              interacts with the input, while uncontrolled components rely on
              the browser to manage the state of the input and do not manage
              their own state.
            </p>
          </div>
          <div className=" mb-10">
            <h1 className="text-gray-300 text-2xl font-bold ">
              02. How to validate React props using PropTypes ?
            </h1>
            <p className="text-gray-300 ml-5 mt-2">
              PropTypes is a library in React that allows you to validate the
              props of a component. When you define propTypes for a component,
              you are essentially telling React what props the component expects
              to receive and what their expected data types are. This can help
              you catch bugs early on in the development process by ensuring
              that the data passed into your component is of the correct type
              and shape.
            </p>
          </div>
          <div className=" mb-10">
            <h1 className="text-gray-300 text-2xl font-bold ">
              03. What are the main difference between nodejs and express js ?
            </h1>
            <p className="text-gray-300 ml-5 mt-2">
              Node.js provides the underlying runtime environment that allows
              you to run JavaScript code on the server side, while Express.js is
              a framework that makes it easier to build web applications using
              Node.js by providing a set of tools and utilities that handle HTTP
              requests and responses, routing, and middleware.
            </p>
          </div>
          <div className=" pb-20">
            <h1 className="text-gray-300 text-2xl font-bold ">
              04. What is a custom hook, and why will you create a custom hook?
            </h1>
            <p className="text-gray-300 ml-5 mt-2">
              A custom hook is a reusable function in React that encapsulates
              common logic that can be shared across multiple components. Custom
              hooks allow you to extract stateful logic from your components and
              reuse it throughout your application. By creating a custom hook,
              you can make your code more modular, easier to maintain, and less
              error-prone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
