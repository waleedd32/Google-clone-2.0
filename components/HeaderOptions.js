import React from "react";
import HeaderOption from "./HeaderOption";
import { SearchIcon } from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div>
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>{" "}
    </div>
  );
}

export default HeaderOptions;
