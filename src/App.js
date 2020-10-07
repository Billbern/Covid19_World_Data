import React from 'react';
import {NavBar, MainContent} from './components';
import './App.css';
import {data} from './components/data';


function App() {
  const [mainData, setMainData] = React.useState({})

  React.useEffect(() => {
    async function fetchData() {
      setMainData( await data.mapData);
    }

    fetchData();
  }, [mainData]);

  return (
    <div className="my_root">
      <NavBar />
      <MainContent data={mainData}/>
    </div>
  );
}

export default App;
