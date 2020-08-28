import React from "react";

const CarouselItem = React.forwardRef(({children, className, width}, ref) => {
    return (
        <div
            style={{minWidth: `${width}px`}}
            className={`item ${className ? className : ''}`}
            ref={ref}
        >
            {children}
        </div>

    )
});

export default CarouselItem;