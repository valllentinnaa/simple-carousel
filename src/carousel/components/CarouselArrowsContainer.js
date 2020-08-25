import React from "react";
import CarouselArrow from "./CarouselArrow";

const CarouselArrowsContainer = ({leftArrowContent, rightArrowContent, arrowClass}) => {

    return (
        <>
            <CarouselArrow direction="left" className={arrowClass}>{leftArrowContent}</CarouselArrow>
            <CarouselArrow direction="right" className={arrowClass}>{rightArrowContent}</CarouselArrow>
        </>
    )
};

export default CarouselArrowsContainer;