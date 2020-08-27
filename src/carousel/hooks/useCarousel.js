import React, {useEffect, useState} from "react";

const useCarousel = (carouselSlideId, id, carouselSlideRef, carouselItemsRef, itemWidth) => {
    let [counter, setCounter] = useState(0);
    let [availableScrollTimes, setAvailableScrollTimes] = useState(0);

    // Predicates
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    // CSS values
    const [transform, setTransform] = useState('');

    // DOM elements
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemsLength, setItemsLength] = useState(0);
    const [allItemsWidth, setAllItemsWidth] = useState(0);

    useEffect(() => {
        setContainerWidth(carouselSlideRef.current.clientWidth);
        setItemsLength(carouselItemsRef.current.children.length);
    }, [document.readyState]);

    useEffect(() => {
        setAllItemsWidth(itemsLength * itemWidth);
    }, [containerWidth]);

    useEffect(() => {
        setAvailableScrollTimes(Math.round(allItemsWidth / containerWidth));

        if (containerWidth < allItemsWidth) setIsScrollEnabled(true);
    }, [allItemsWidth]);

    useEffect(() => {
        setTransform(`translateX(${-containerWidth * counter}px)`);
    }, [counter]);


    const slide = (counterValue) => {
        setCounter(counterValue);
    };

    return {
        carouselState: {
            isScrollEnabled,
            transform,
            counter,
            availableScrollTimes
        },
        carouselHandlers: {
            slide
        },
    };
};

export default useCarousel;