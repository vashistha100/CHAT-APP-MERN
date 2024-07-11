import React from "react";
import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
    <form className="flex items-center gap-2 mt-2 mx-auto p-4">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered input-info w-full max-w-xs"
      />
      <button className="btn btn-circle btn-outline"><IoSearchSharp /></button>
    </form>
  );
}

export default SearchInput;
