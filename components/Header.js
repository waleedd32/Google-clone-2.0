import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Image
        src="/Jebordoq.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer "
      />
      <form
        className="flex flex-grow px-6 py-3 ml-10 mr-5 border
       border-gray-200 rounded-full shadow-lg max-w-3xl  items-center"
      >
        <input
          ref={searchInputRef}
          className="flex-grow w-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition 
        duration-100 transform hover:scale-125 "
          onClick={() => (searchInputRef.current.value = "")}
        />
        <MicrophoneIcon
          className="mr-3 h-6 hidden sm:inline-flex
        text-blue-500 border-l-2 pl-4 border-gray-300 "
        />
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
        <button hidden type="submit" onClick={search}></button>
      </form>
    </div>
  );
}

export default Header;
