


// import React, { useState } from 'react';
// import { assets } from '../assets/frontend_assets/assets';

// const LoginPopUp = (setShowLogin) => {
//     const [currState, setCurrState] = useState("Login");

//     return (
//         <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 bg-black/20 flex items-center justify-center z-50">
//             <form className="bg-white w-[50%] max-w-sm p-6 rounded-xl shadow-xl space-y-5 font-primary">
//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-2xl font-bold text-gray-800">{currState}</h2>
//                     <img
//                         onClick={() => setShowLogin}
//                         src={assets.cross_icon}
//                         alt=""
//                         className="w-6 h-6 cursor-pointer"
//                     />
//                 </div>

//                 <div className="flex flex-col space-y-4">
//                     {currState === "Login" ? <></> : (
//                         <input
//                             type='text'
//                             placeholder='Your Name'
//                             required
//                             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     )}
//                     <input
//                         type="email"
//                         placeholder='Your email'
//                         required
//                         className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                         type="password"
//                         placeholder='Password'
//                         required
//                         className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <button
//                     className="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-400 transition"
//                 >
//                     {currState === "Sing Up" ? "Create account" : "Login"}
//                 </button>

//                 <div className="flex items-start space-x-2 text-sm text-gray-600">
//                     <input type="Checkbox" required />
//                     <p>By continuing, I agree to the terms of use & privacy policy</p>
//                 </div>

//                 {currState === 'Login'
//                     ? <p className="text-center text-sm text-gray-700">
//                         Create a new Account? <span
//                             onClick={() => setCurrState("sing up")}
//                             className="text-blue-600 cursor-pointer font-medium"
//                         >Click Here</span>
//                     </p>
//                     : <p className="text-center text-sm text-gray-700">
//                         Already have an account? <span
//                             onClick={() => setCurrState("Login")}
//                             className="text-blue-600 cursor-pointer font-medium"
//                         >Login here</span>
//                     </p>
//                 }
//             </form>
//         </div>
//     );
// };

// export default LoginPopUp;


// import React, { useState } from 'react';
// import { assets } from '../assets/frontend_assets/assets';

// const LoginPopUp = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Login");

//   return (
//     <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 bg-black/20 flex items-center justify-center z-50">
//       <form className="bg-white w-[90%] max-w-sm p-6 rounded-xl shadow-xl space-y-5 font-primary">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-gray-800">
//             {currState === "Login" ? "Login" : "Create Account"}
//           </h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="close"
//             className="w-6 h-6 cursor-pointer"
//           />
//         </div>

//         {/* Form Inputs */}
//         <div className="flex flex-col space-y-4">
//           {currState === "Sign Up" && (
//             <input
//               type="text"
//               placeholder="Your Name"
//               required
//               className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           )}
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* ✅ Button with correct label */}
//         <button
//           type="submit"
//           className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
//         >
//           {currState === "Login" ? "Login" : "Create Account"}
//         </button>

//         {/* Terms */}
//         <div className="flex items-start space-x-2 text-sm text-gray-600">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use & privacy policy</p>
//         </div>

//         {/* Toggle */}
//         {currState === 'Login' ? (
//           <p className="text-center text-sm text-gray-700">
//             Don't have an account?{' '}
//             <span
//               onClick={() => setCurrState("Sign Up")}
//               className="text-red-400 cursor-pointer font-medium"
//             >
//               Create one
//             </span>
//           </p>
//         ) : (
//           <p className="text-center text-sm text-gray-700">
//             Already have an account?{' '}
//             <span
//               onClick={() => setCurrState("Login")}
//               className="text-red-400 cursor-pointer font-medium"
//             >
//               Login
//             </span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopUp;

import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets'; // Make sure path is correct

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 bg-black/20 flex items-center justify-center z-50">
      <form className="bg-white w-[90%] max-w-sm p-6 rounded-xl shadow-xl space-y-5 font-primary">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {currState === "Login" ? "Login" : "Create Account"}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col space-y-4">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
        >
          {currState === "Login" ? "Login" : "Create Account"}
        </button>

        {/* Terms */}
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {/* Toggle Login/Signup */}
        {currState === 'Login' ? (
          <p className="text-center text-sm text-gray-700">
            Don't have an account?{' '}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-red-400 cursor-pointer font-medium"
            >
              Create one
            </span>
          </p>
        ) : (
          <p className="text-center text-sm text-gray-700">
            Already have an account?{' '}
            <span
              onClick={() => setCurrState("Login")}
              className="text-red-400 cursor-pointer font-medium"
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
