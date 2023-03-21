import { PaidPacks as list } from "../components/Lists";

function Home() {
  return (
    <main className="flex w-full flex-1 p-8">
      <div className="grid h-full w-full items-center justify-center gap-8 2xl:grid-cols-3">
        {list.map((item) => (
          <div className="flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-xl shadow-customBox shadow-neutral-900">
            <img className="w-full flex-1 rounded-t-xl" src={item.link} />
            <h1 className="font-regular flex h-16 w-full items-center justify-center bg-gradient-to-tl from-yellow-900 to-yellow-500 text-center font-righteous text-xl text-white 2xl:h-20 2xl:text-3xl">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
