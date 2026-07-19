import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = ({ setSearchAllPostType, searchAllPostType }) => {
  return (
    <>
      <>
        <input
          type="text"
          placeholder="Search the Post..."
          className="input w-full"
          onChange={(e) => setSearchAllPostType(e.target.value)}
          value={searchAllPostType}
        />
      </>

      <>
        <ul className="flex item-center justify-center h-full">
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/home">
              HOME
            </Link>
          </li>
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/form">
              FORM
            </Link>
          </li>
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/allPost">
              POSTS
            </Link>
          </li>
        </ul>
      </>
    </>
  );
};

export default HeaderNav;
