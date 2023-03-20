import React from "react";
import { PhotosList as list } from "../components/Lists";

function Home() {
  return (
    <main className="w-full flex-1  flex p-8">
      <div className="w-full h-full grid justify-center items-center grid-cols-3 phone:grid-cols-1 gap-8">
        {list.map((item) => (
          <div className="w-full h-full bg-gray-300 flex items-center justify-between flex-col rounded-xl overflow-hidden">
            <img
              className="h-[calc(100%-5rem)] phone:h-[calc(100%-4rem)] w-full rounded-t-xl"
              src={item.link}
            />
            <h1 className="text-4xl font-fredoka-one font-black text-center h-16 w-full bg-slate-500 flex justify-center items-center">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
