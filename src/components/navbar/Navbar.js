import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const seeRegister = () => {
        navigate("/register");
  }

  const seeHome = () => {
    navigate("/");
  }
  return (
    <div className="h-[60px] bg-[#003B95] flex w-full justify-between text-white cursor-pointer">
      <span onClick={seeHome} className="text-3xl font-extrabold px-28 py-3">StayAT</span>
      <div className="text-lg px-28 font-semibold">
        <button onClick={seeRegister} className="p-5">Register</button>
        <button onClick={seeRegister}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
