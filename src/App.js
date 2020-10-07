import React from 'react';

import './App.css';
import {NavBar, MainContent} from './components';

import {data} from './components/data';

function App() {
  const [mainData, setMainData] = React.useState({})

  React.useEffect(() => {
    async function fetchData() {
      setMainData( await data);
    }

    fetchData();
  }, [mainData]);

  return (
    <div className="my_root">
      <NavBar />
      <MainContent evdata={mainData}/>
    </div>
  );
}

export default App;
