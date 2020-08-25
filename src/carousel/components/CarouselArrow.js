import React from "react";

const CarouselArrow = (props) => {
    const directionClasses = props.direction === 'right' ? 'nextBtn carousel-arrow-right' : 'prevBtn carousel-arrow-left';

    return (
        <div className={`${directionClasses} ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    )
};

export default CarouselArrow;