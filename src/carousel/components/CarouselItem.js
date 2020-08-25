import React from "react";

const CarouselItem = (props) => {
    return (
        <div className={`item ${props.className ? props.className : ''}`}>
            {props.children}
        </div>

    )
};

export default CarouselItem;