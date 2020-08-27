import React from "react";

const CarouselItem = ({children, className, width}) => {
    console.log(width);
    return (
        <div style={{width: `${width}px`}} className={`item ${className ? className : ''}`}>
            {children}
        </div>

    )
};

export default CarouselItem;