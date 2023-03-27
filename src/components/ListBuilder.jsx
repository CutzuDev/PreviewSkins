import { toast } from "react-toastify";
import { Download } from "./SVGList";

function ListBuilder({ list }) {
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
    <div className="grid h-full w-full items-center justify-center gap-8 xl:grid-cols-3">
      {list.map((item, index) => (
        <div
          onClick={() => {
            if (item.price) {
              sendAlert(
                `💳 If you wish to buy: ${item.name}, contact: CutzuSD#4226`,
                4000
              );
              setTimeout(() => {
                sendAlert(`😏 Special prices for bulk purchases!`, 4000);
              }, 750);
            }
          }}
          key={index}
          className={`flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-xl shadow-customBox shadow-neutral-900 ${
            item.price ? "hover:cursor-pointer" : "hover:cursor-default"
          }`}
        >
          <img className="w-full flex-1 rounded-t-xl" src={item.link} />
          <h1 className="font-regular relative flex h-16 w-full items-center justify-center bg-gradient-to-tl from-yellow-900 to-yellow-500 text-center font-righteous text-xl text-white xl:h-20 xl:text-3xl">
            {item.name}

            {item.download ? (
              <a
                href={item.download}
                target={"_blank"}
                className="absolute bottom-1/2 right-5 flex h-10 w-7 translate-y-1/2 items-center justify-center xl:w-10"
              >
                <Download
                  className="transition duration-100 ease-in-out active:scale-90"
                  color={"#fff"}
                />
              </a>
            ) : null}
            {item.price ? (
              <div className="absolute bottom-1/2 right-5 flex translate-y-1/2 items-center justify-center rounded-md  bg-orange-300 bg-opacity-30 px-3 text-orange-100 shadow-customBox shadow-[#00000040]">
                {item.price}{" "}
                <span className="text-4xl  text-orange-100">€</span>
              </div>
            ) : null}
          </h1>
        </div>
      ))}

      <div className="flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-xl shadow-customBox shadow-neutral-900">
        <img
          className="w-full flex-1 rounded-t-xl"
          src="https://media.discordapp.net/attachments/873100563687018556/1088904030123741374/a.png"
        />
        <h1 className="font-regular relative flex h-16 w-full items-center justify-center bg-gradient-to-tl from-yellow-900 to-yellow-500 text-center font-righteous text-xl text-white xl:h-20 xl:text-3xl">
          More Soon...
        </h1>
      </div>
    </div>
  );
}

export default ListBuilder;
