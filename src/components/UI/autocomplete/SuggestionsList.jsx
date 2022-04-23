import "../../../assets/css/autocomplete.css";

const SuggestionsList = (props) => {
  const { activeSuggestionIndex, filteredSuggestions, onClick, stockFlag } =
    props;
  return filteredSuggestions.length ? (
    <>
      {stockFlag("")}
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <>
      {stockFlag("disabled")}
      <div className="no-suggestions">
        <em>No stock found!</em>
      </div>
    </>
  );
};

export default SuggestionsList;
