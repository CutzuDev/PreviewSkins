import React from "react";
import { Link } from "react-router-dom";

function NFHandle() {
  return (
    <main className="flex h-full w-full flex-1 flex-col items-center justify-center gap-8 p-8">
      <h1 className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-800 bg-clip-text font-righteous text-8xl text-transparent">
        404
      </h1>
      <h1 className="bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-800 bg-clip-text font-righteous text-4xl text-transparent">
        Page Not Found
      </h1>
      <Link to={"/"}>
        <h1 className="rounded-md border-2 border-yellow-500 bg-yellow-500 bg-opacity-10 px-4 py-2 font-righteous text-2xl text-yellow-500 transition duration-300 ease-in-out hover:scale-95">
          Go Back
        </h1>
      </Link>
    </main>
  );
}

export default NFHandle;
