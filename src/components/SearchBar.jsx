import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
  };

  return (
    <form onSubmit={submitHandler} className="px-12 py-8">
      <div
        className="
          flex items-center gap-3
          bg-[#0f172a]
          border border-white/10
          rounded-xl
          px-4 py-3
          shadow-lg
          focus-within:border-blue-500
          transition
        "
      >
        {/* Search Icon */}
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />

        {/* Input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search photos, videos, GIFs"
          className="
            flex-1 bg-transparent
            text-white placeholder-gray-400
            outline-none
          "
        />

        {/* Button */}
        <button
          className="
            px-6 py-2 rounded-lg
            bg-blue-600 hover:bg-blue-500
            text-sm font-medium
            transition
          "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
