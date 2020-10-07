import React from "react";

function CountrySelector(props) {
  return (
      <option value={props.value}>{props.value}</option>
  );
}

export default CountrySelector;
