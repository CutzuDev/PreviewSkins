import React from "react";
import discord from "../assets/discord.svg";

function Navbar() {
  return (
    <nav className="w-full h-20 bg-slate-900 flex items-center justify-between phone:px-5 px-10">
      <h1 className="phone:text-base text-2xl font-fredoka-one text-white shoa">
        Packs by CutzuSD & EnerrHaha
      </h1>
      <a
        href="https://discord.gg/WWJuNS2z6c"
        target={"_blank"}
        className="flex items-center gap-3 phone:gap-1 bg-[#7289da] phone:px-2  py-2 px-4 rounded-xl transition duration-300 ease-in-out hover:scale-95 shadow-customBox shadow-neutral-900"
      >
        <h1 className="text-xl phone:text-base font-fredoka-one">Discord</h1>
        <img src={discord} className="w-10 phone:w-7" />
      </a>
    </nav>
  );
}

export default Navbar;
