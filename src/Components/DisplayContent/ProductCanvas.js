import React from 'react';
import './ProductCanvas.css';

function ProductCanvas(props) {
    return (
        
            <div className="ProductCanvas__main">
            <div className="ProductCanvas__body">
                <img src="https://ik.imagekit.io/artist1234/images/canvas02.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671542567670"/>
            </div>
            <div className="rupeeSign">₹ 1050</div>
            
                    <a className="button is-primary" href="product.html" target="_blank">
                        <strong>Ganesha Painting </strong>
                    </a>
                
       
        </div>
    );
}

export default ProductCanvas;