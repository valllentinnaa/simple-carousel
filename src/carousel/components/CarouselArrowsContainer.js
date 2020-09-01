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
                // Counter starts from 0 so the - 1 is to equal it with available scroll times
                disabled={counter === availableScrollTimes - 1}
            >
                {nextArrowContent}
            </CarouselArrow>
        </>
    )
};

export default CarouselArrowsContainer;