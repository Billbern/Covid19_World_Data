import React from 'react';
import Map from './Map';
import SideBar from './SideBar';

function MainContent(){
    return(
        <div className="main_contain">
            <Map />
            <SideBar />
        </div>
    );
}


export default MainContent;