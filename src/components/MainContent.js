import React from 'react';
import Map from './Map';
import SideBar from './SideBar';

function MainContent({maindt}){
    return(
        <div className="main_contain">
            <Map />
            <SideBar maindt={maindt}/>
        </div>
    );
}


export default MainContent;