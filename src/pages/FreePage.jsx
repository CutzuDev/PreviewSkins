import { FreePacks as list } from "../components/Lists";

function FreePage() {
  return (
    <main className="flex w-full flex-1 p-8">
      <div className="grid h-full w-full items-center justify-center gap-8 2xl:grid-cols-3">
        {list.map((item) => (
          <div className="flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-xl shadow-customBox shadow-neutral-900">
            <img className="w-full flex-1 rounded-t-xl" src={item.link} />
            <h1 className="flex h-16 w-full items-center justify-center bg-gradient-to-tl from-slate-700 to-slate-500 text-center font-fredoka-one text-4xl font-black 2xl:h-20">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
}

export default FreePage;