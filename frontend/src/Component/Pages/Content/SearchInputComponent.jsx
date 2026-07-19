import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { DataContext } from "../../../Context/ContextData";

const SearchInputComponent = () => {
  const { searchType, setSearchType } = useContext(DataContext);
  return (
    <section className="flex flex-row gap-4 px-3 items-center justify-between bg-gray-800">
      <>
        <input
          type="text"
          placeholder="Search the Post..."
          className="input w-full"
          onChange={(e) => setSearchType(e.target.value)}
          value={searchType}
        />
      </>
      <>
        <ul className="flex item-center justify-center h-full">
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/home">HOME</Link>
          </li>
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/form">FORM</Link>
          </li>
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/about">ABOUT</Link>
          </li>
          <li className="font-bold text-white hover:bg-blue-400 hover:text-black py-5 px-2 h-full">
            <Link className="text-sm" to="/allPost">POSTS</Link>
          </li>
        </ul>
      </>
    </section>
  );
};

export default SearchInputComponent;
