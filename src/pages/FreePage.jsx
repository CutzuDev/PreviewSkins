import { FreePacks as list } from "../components/Lists";
import download from "../assets/download.svg";

function FreePage() {
  return (
    <main className="flex w-full flex-1 p-8">
      <div className="grid h-full w-full items-center justify-center gap-8 2xl:grid-cols-3">
        {list.map((item) => (
          <div className="flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-xl shadow-customBox shadow-neutral-900">
            <img className="w-full flex-1 rounded-t-xl" src={item.link} />
            <h1 className="relative flex h-16 w-full items-center justify-center bg-gradient-to-tl from-slate-700 to-slate-500 text-center font-inter text-xl font-black text-white 2xl:h-20 2xl:text-3xl">
              {item.name}
              <a
                href={item.download}
                className="absolute bottom-1/2 right-5 flex h-10 w-7 translate-y-1/2 items-center justify-center 2xl:w-10"
              >
                <img
                  src={download}
                  className="transition duration-100 ease-in-out active:scale-90"
                />
              </a>
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
}

export default FreePage;
