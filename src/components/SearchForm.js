import React, { useState } from "react";

function Form({ searchReceipts }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchReceipts(term);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        onChange={handleChange}
        value={term}
        name="searchTerm"
        placeholder="Search by Customer Name"
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Form;
