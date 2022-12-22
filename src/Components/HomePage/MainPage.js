import React, { Component } from 'react';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementTwo from './AdvertisementTwo/AdvertisementTwo';
import AdvertisementThree from './AdvertisementThree/AdvertisementThree';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import "./mainpage.css"

class MainPage extends Component {
    constructor(props) {
     super(props);
     this.state = { }
    }
    render() {
     return (
         <div className="mainpage">
            
            <div style={{ paddingTop: "10px",display: 'flex'}}>
                <AdvertisementOne/>
                <AdvertisementTwo/>
                <AdvertisementThree/>
                <AdvertisementFour/>
            </div>
           
         </div>
     );
    }
 }
 
 export default MainPage;
 
