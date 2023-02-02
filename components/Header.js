import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();
  return (
    <div>
      <Image
        src="/Jebordoq.png"
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer "
      />
    </div>
  );
}

export default Header;
