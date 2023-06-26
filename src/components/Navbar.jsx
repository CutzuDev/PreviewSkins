import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Discord, House } from "./SVGList";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    sendAlert("👋 Welcome to Cutzu's Skins!", 3500);
    setTimeout(() => {
      sendAlert(
        "💻 We offer paid / free / custom made gun packs on Fivem.",
        5000
      );
    }, 1000);
    setTimeout(() => {
      sendAlert("💳 If you wish to make a purchase contact:", 7000);
      setTimeout(() => {
        sendAlert("👤 CutzuSD#4226 on Discord", 7000);
      }, 1000);
    }, 2000);
  }, []);

  function sendAlert(text, duration) {
    toast(`${text}`, {
      position: "bottom-right",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-neutral-900 px-5 shadow-customBox shadow-neutral-900 xl:px-10">
      <div className="flex items-center gap-3 hover:cursor-pointer xl:gap-3">
        <Link to={"/"}>
          <House
            className="w-7 shadow-customBox shadow-neutral-900 transition duration-300 ease-in-out hover:scale-95 xl:w-10"
            color={"#eab308"}
          />
        </Link>
        <Link
          to={"/shop"}
          className="font-regular rounded-md border-2 border-yellow-500 bg-yellow-500 bg-opacity-10 px-4 py-1 font-righteous text-xl text-yellow-500 shadow-customBox shadow-neutral-900 transition duration-300 ease-in-out hover:scale-95 phone:text-base"
        >
          Shop
        </Link>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

      <a
        href="http://discord.cutzu.skin"
        target={"_blank"}
        className="font-regular flex items-center gap-1 rounded-xl bg-[#7289da] px-4 py-2 shadow-customBox shadow-neutral-900 transition duration-300 ease-in-out hover:scale-95 xl:gap-3"
      >
        <h1 className="font-righteous text-base text-[#d4deff] xl:text-xl">
          Discord
        </h1>
        <Discord className={"w-7 xl:w-10"} color={"#fff"} />
        {/* <img src={discord} className="w-7 xl:w-10" /> */}
      </a>
    </nav>
  );
}

export default Navbar;
