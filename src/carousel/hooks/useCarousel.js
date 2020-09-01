import React, {useEffect, useState} from "react";
import useActiveTab from "./useActiveTab";

const useCarousel = (carouselSlideId,
                     id,
                     carouselSlideRef,
                     itemWidth,
                     activeItem,
                     itemsCollectionLength
) => {
    let [counter, setCounter] = useState(0);
    let [availableScrollTimes, setAvailableScrollTimes] = useState(0);
    let [visibleItemsLength, setVisibleItemsLength] = useState(0);

    // Predicates
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    // CSS values
    const [transform, setTransform] = useState('');

    // DOM elements
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemsCollectionWidth, setItemsCollectionWidth] = useState(0);

    const slide = (value) => {
        setTransform(`translateX(${value}px)`);
    };

    const changeCounter = (counterValue) => {
        setCounter(counterValue);
    };

    /*    const {activeTabState, activeTabHandlers} = useActiveTab(
            carouselContainerRef,
            counter,
            carouselItemsRef,
            activeItem);*/

    useEffect(() => {
        if (carouselSlideRef) {
            setContainerWidth(carouselSlideRef.current.clientWidth);
        }
    }, [carouselSlideRef, isScrollEnabled]);


    useEffect(() => {
        if (itemsCollectionLength && itemWidth) setItemsCollectionWidth(itemsCollectionLength * itemWidth);
    }, [itemsCollectionLength, itemWidth]);

    useEffect(() => {
        if (itemsCollectionWidth && containerWidth && itemsCollectionLength) {
            setAvailableScrollTimes(Math.round(itemsCollectionWidth / containerWidth));
            if (containerWidth < itemsCollectionWidth) setIsScrollEnabled(true);
            setVisibleItemsLength(Math.round(containerWidth / itemWidth));
        }
    }, [itemsCollectionWidth, containerWidth, itemsCollectionLength]);


    useEffect(() => {
        if (containerWidth) {
            slide(-containerWidth * counter);
        }
    }, [counter]);

    return {
        carouselState: {
            isScrollEnabled,
            transform,
            counter,
            availableScrollTimes
        },
        carouselHandlers: {
            slide,
            changeCounter
        },
    };
};

export default useCarousel;