import React from "react";

const MailList = () => {
  return (
    <div className="mail w-[100%] mt-[50px] bg-[#003580] flex flex-col items-center gap-[20px]">
      <h1 className="mailTitle text-3xl font-semibold m-10 text-white">
        Save time, save money!
      </h1>
      <span className="mailDesc text-lg text-white">
        Sign up and we'll send the best deals to you
      </span>

      <div className="mailInputContainer p-10">
        <input
          className="w-[550px] h-[50px] p-[25px] border-none mr-[10px] rounded-lg"
          type="text"
          placeholder="Your email address"
        />
        <button className="h-[50px] bg-[#0071c2] text-white px-4 border-hidden text-lg rounded-lg hover:scale-110 transition duration-500 font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
