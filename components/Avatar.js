import React from "react";
import Image from "next/image";

function Avatar({ url, className }) {
  return (
    <img
      className="h-10 rounded-full
       cursor-pointer object-contain transition duration-150
       transform hover:scale-110"
      loading="lazy"
      src={url}
      alt="profile pic"
    />
  );
}

export default Avatar;