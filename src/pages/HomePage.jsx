import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import Content from "../components/Content";

function HomePage() {
  const { query } = useSelector((store) => store.search);

  return (
    <div>
      <SearchBar />

      {query !== "" ? (
        <>
          <Tabs />
          <ResultGrid />
        </>
      ) : (
        /* 👇 HOME EMPTY STATE */
        <Content />
      )}
    </div>
  );
}

export default HomePage;
