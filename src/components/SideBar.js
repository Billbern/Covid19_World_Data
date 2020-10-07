import React from "react";

import Card from "./Card";
import CountrySelector from "./CountrySelector";

import {data} from './data';

function SideBar() {
  const [dateData, setDateData] = React.useState('');
  const [mapData, setMapData] = React.useState([]);
  const [getCountry, setGetCountry] = React.useState('Global');

  React.useEffect(()=>{
      async function fetchData(){
          setMapData(await data.mapdata);
          setDateData(await data.date)
      }
      fetchData();
      
  }, [setMapData, setDateData]);

  function handleChange(country){
      setGetCountry(country);
  }

  return (
    <div className="right_side">
      <select name="countries" defaultValue="" className="count_select" onChange={(e)=> handleChange(e.target.value)}>
        <option value="Global">Global</option>
        {mapData.map((continent, i)=>(<CountrySelector key={i} value={continent.country}/>))}
      </select>
     
      <div className="country_data">
        <div className="meta_data">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GDJ-World-Flags-Globe.svg"
            alt=""
            width="200"
            height="150"
          />
          <div className="country_name">
            <h4>{getCountry}</h4>
            <small>{dateData}</small>
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
