import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

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
      </form>
    </div>
  );
}

export default Header;
