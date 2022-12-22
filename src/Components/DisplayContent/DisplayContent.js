import React from 'react';
import ProductCanvas from './ProductCanvas';

function DisplayContent(props) {
    return (
        <div>
        <div className="CanvasDisplay__Page">
            <ProductCanvas/>
            <ProductCanvas/>
            <ProductCanvas/>
        </div>
        </div>
    );
}

export default DisplayContent;