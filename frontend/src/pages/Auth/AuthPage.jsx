import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6">Welcome to Book Store</h1>
      <button
        onClick={() => loginWithRedirect()}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Log In
      </button>
      <footer className="text-gray-400 mt-2 sm:mt-4 text-lg">Built by Chetan</footer>
    </div>
  );
};

export default LoginButton;


// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;
