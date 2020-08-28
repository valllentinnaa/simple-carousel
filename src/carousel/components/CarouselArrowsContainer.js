import React from "react";
import CarouselArrow from "./CarouselArrow";

const CarouselArrowsContainer = ({
                                     prevArrowContent,
                                     nextArrowContent,
                                     arrowClass,
                                     id,
                                     clickHandler,
                                     counter,
                                     availableScrollTimes
                                 }) => {

    const increase = () => {
        return counter++;
    };

    const decrease = () => {
        return counter--;
    };

    return (
        <>
            <CarouselArrow
                direction="prev"
                className={arrowClass}
                id={id}
                clickHandler={clickHandler}
                counter={decrease}
                disabled={!counter}
            >
                {prevArrowContent}
            </CarouselArrow>
            <CarouselArrow
                direction="next"
                className={arrowClass}
                id={id}
                clickHandler={clickHandler}
                counter={increase}
                disabled={counter === availableScrollTimes}
            >
                {nextArrowContent}
            </CarouselArrow>
        </>
    )
};

export default CarouselArrowsContainer;