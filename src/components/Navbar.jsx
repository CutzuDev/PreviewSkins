import { Link } from "react-router-dom";
import discord from "../assets/discord.svg";
import house from "../assets/house-solid.svg";

function Navbar() {
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-slate-900 px-5 shadow-customBox shadow-neutral-900 2xl:px-10">
      <div className="flex items-center gap-3 hover:cursor-pointer 2xl:gap-3">
        <Link to={"/"}>
          <img
            src={house}
            className="w-7 shadow-customBox shadow-neutral-900 transition duration-300 ease-in-out hover:scale-95 2xl:w-10"
          />
        </Link>
        <Link
          to={"/free"}
          className="rounded-md border-2 border-white bg-white bg-opacity-10 px-4 py-1 font-inter font-black text-2xl text-white shadow-customBox shadow-neutral-900 transition duration-300 ease-in-out hover:scale-95 phone:text-base"
        >
          Free
        </Link>
      </div>

      <a
        href="https://discord.gg/WWJuNS2z6c"
        target={"_blank"}
        className="flex items-center font-black gap-1 rounded-xl bg-[#7289da] px-4 py-2 shadow-customBox shadow-neutral-900 transition duration-300 ease-in-out hover:scale-95 2xl:gap-3"
      >
        <h1 className="font-inter text-base text-[#d4deff] 2xl:text-xl">
          Discord
        </h1>
        <img src={discord} className="w-7 2xl:w-10" />
      </a>
    </nav>
  );
}

export default Navbar;
