import React from "react";

function CountrySelector({data}) {
  const [country, setCountry] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      setCountry( await data);
    }

    fetchData();
  }, [setCountry, data]);

  return (
    <select name="countries" id="count_list" className="count_select">
      <option value="">Global</option>
      {country.map((county, i) => (
        <option key={i} value={county}>{county}</option>
      ))}
    </select>
  );
}

export default CountrySelector;
