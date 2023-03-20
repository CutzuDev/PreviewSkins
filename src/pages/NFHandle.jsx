import React from "react";
import { Link } from "react-router-dom";

function NFHandle() {
  return (
    <main className="flex h-full w-full flex-1 flex-col items-center justify-center gap-8 p-8">
      <h1 className="font-fredoka-one text-8xl text-white">404</h1>
      <h1 className="font-fredoka-one text-4xl text-white">Page Not Found</h1>
      <Link to={"/"}>
        <h1 className="rounded-md border-2 border-white bg-white bg-opacity-10 px-4 py-2 font-fredoka-one text-2xl text-white transition duration-300 ease-in-out hover:scale-95">
          Go Back
        </h1>
      </Link>
    </main>
  );
}

export default NFHandle;
