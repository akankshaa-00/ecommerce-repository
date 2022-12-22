import React from 'react';
import "./AdvertisementOne.css"


function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne__main">
            <div className="AdvertisementOne__body">
                <img src="https://ik.imagekit.io/artist1234/images/canvas01.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671542567499"/>
            </div>
            <div className="AdvertisementOne__footer">Canvas Paintings | Perfect for gifting</div>
        </div>
    );
}

export default AdvertisementOne;