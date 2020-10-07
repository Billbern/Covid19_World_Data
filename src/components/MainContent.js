import React from 'react';
import Map from './Map';
import SideBar from './SideBar';

function MainContent(props){
    return(
        <div className="main_contain">
            <Map evdata={props.evdata}/>
            <SideBar />
        </div>
    );
}


export default MainContent;