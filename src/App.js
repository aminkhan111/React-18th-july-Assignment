import { useState } from 'react';
import logo from "./assets/instagram.png";

function App() {
  const [login, setLogin] = useState(true);

  const loginSwitch = () => {
    setLogin(!login);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col w-75   p-6 border border-gray-300 rounded-lg text-center gap-1.5">
        <img src={logo} alt="Instagram logo" className="w-56 mx-auto pb-5" />

        <input
          hidden={login}
          type="text"
          placeholder="Mobile No or Email"
          className="bg-gray-50 border border-gray-300 h-8 px-1 text-black"
        />

        <input
          hidden={login}
          type="text"
          placeholder="Full Name"
          className="bg-gray-50 border border-gray-300 h-8 px-1 text-black"
        />

        <input
          type="email"
          placeholder="Email or Username"
          className="bg-gray-50 border border-gray-300 h-8 px-1 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 h-8 px-1 text-black"
        />

        <button className="bg-blue-500 text-white h-8 rounded px-1 outline-none">
          {login ? "Sign in" : "Sign up"}
        </button>

        <div className="pt-5">
          {login ? "Don't have account?" : "Have an Account"}{' '}
          <span onClick={loginSwitch} className="text-blue-500 cursor-pointer">
            {login ? "Sign up" : "Log in"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
