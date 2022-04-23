import React, { useState } from "react";

import Input from "../Input";
import SuggestionsList from "./SuggestionsList";

const AutoComplete = (props) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputTarget, setInputTarget] = useState("");

  const { suggestions } = props;

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInputTarget(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInputTarget(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  return (
    <>
      <Input
        ref={props.textInputRef}
        classes="online_book"
        label=""
        onChange={onChange}
        input={{
          id: "home-search",
          type: "text",
          placeholder: "Search Stock",
          value: inputTarget,
          autoComplete: "off",
        }}
      />
      {showSuggestions && inputTarget && (
        <SuggestionsList
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={onClick}
          stockFlag={props.stockFlag}
        />
      )}
    </>
  );
};

export default AutoComplete;
