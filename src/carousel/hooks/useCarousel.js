import React, {useEffect, useState} from "react";
import useActiveTab from "./useActiveTab";

const useCarousel = (carouselSlideId,
                     id,
                     carouselSlideRef,
                     carouselItemsRef,
                     itemWidth,
                     activeItemRef
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
    const [itemsLength, setItemsLength] = useState(0);
    const [allItemsWidth, setAllItemsWidth] = useState(0);

    const {activeTabState, activeTabHandlers} = useActiveTab(activeItemRef, containerWidth, carouselSlideRef);

    useEffect(() => {
        if (carouselSlideRef && carouselItemsRef) {
            setContainerWidth(carouselSlideRef.current.clientWidth);
            setItemsLength(carouselItemsRef.current.children.length);
        }
    }, [document.readyState]);

    useEffect(() => {
        if (itemsLength && itemWidth) setAllItemsWidth(itemsLength * itemWidth);
    }, [itemsLength, itemWidth]);

    useEffect(() => {
        if (allItemsWidth && containerWidth) {
            setAvailableScrollTimes(Math.round(allItemsWidth / containerWidth));
        }
    }, [allItemsWidth]);

    useEffect(() => {
        if (containerWidth) {
            slide(-containerWidth * counter);
        }
    }, [counter]);

    useEffect(() => {
        if (containerWidth < allItemsWidth) setIsScrollEnabled(true);
    }, [containerWidth, allItemsWidth]);

    useEffect(() => {
        if (containerWidth && itemsLength) {
            setVisibleItemsLength(Math.round(containerWidth / itemWidth));
        }
    }, [containerWidth, itemsLength]);

    useEffect(() => {
        if (carouselSlideRef) {
            setContainerWidth(carouselSlideRef.current.clientWidth);
        }
        //console.log('should show dropdown');
        //console.log('in it there should be all the tabs that are not visible');
        // Get invisible tabs
        // How much tabs I can have visible -> Math.round(containerWidth/itemWidth)
    }, [isScrollEnabled]);

    const slide = (value) => {
        setTransform(`translateX(${value}px)`);
    };

    const changeCounter = (counterValue) => {
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
            slide,
            changeCounter
        },
    };
};

export default useCarousel;