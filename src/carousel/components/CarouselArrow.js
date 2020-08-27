import React from "react";

const CarouselArrow = ({
                           children,
                           direction,
                           className,
                           id,
                           clickHandler,
                           counter,
                           disabled
                       }) => {

    const directionClasses = direction === 'next' ? `next-${id} carousel-arrow-right` : `prev-${id} carousel-arrow-left`;
    return (
        <button
            id={`${direction}-${id}`}
            className={`${directionClasses} ${className ? className : ''}`}
            onClick={() => {
                clickHandler(counter)
            }}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

export default CarouselArrow;