import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen w-full">
      <Link href={"/sign-in"}>
        <button className="p-4 rounded-md bg-amber-500">Sign In</button>
      </Link>
      <Link href={"/sign-up"}>
        <button className="p-4 rounded-md bg-sky-500">Sign Up</button>
      </Link>
      <Link href={"/dashboard"}>
        <button className="p-4 rounded-md bg-purple-500">Dashboard</button>
      </Link>
    </div>
  );
};

export default HomePage;
