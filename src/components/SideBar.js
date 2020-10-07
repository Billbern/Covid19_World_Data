import React from "react";
import Card from "./Card";
import CountrySelector from "./CountrySelector";

function SideBar() {
  return (
    <div className="right_side">
      <CountrySelector data={}/>
      <div className="country_data">
        <div className="meta_data">
          <img src={process.env.PUBLIC_URL + '/img/gfl.svg'} alt="" width="200" height="150" />
          <div className="country_name">
            <h4>Global</h4>
            <small>4th October, 2020</small>
          </div>
        </div>
        <div className="count_data">
          <Card title="Total Cases" figure="5000" color="#7ab5e2" />
          <Card title="Active Cases" figure="2000" color="#e3b934" />
          <Card title="Recovered Cases" figure="2500" color="#64cb53" />
          <Card title="Death Cases" figure="500" color="#d23e33" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
