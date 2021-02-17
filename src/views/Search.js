import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  let { param } = useParams();

  useEffect(() => {
    setSearch(param);
  }, [param]);

  return (
    <div>
      <h1>Welcome to Search: {search}</h1>
    </div>
  );
};

export default Search;
