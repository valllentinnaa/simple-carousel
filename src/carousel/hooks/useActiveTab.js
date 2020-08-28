import React, {useEffect, useState} from "react";

const useActiveTab = (activeItemRef, containerWidth, carouselSlideRef) => {
    const [activeCoordinates, setActiveCoordinates] = useState({});
    const [containerCoordinates, setContainerCoordinates] = useState({});

    useEffect(() => {
        if (activeItemRef && containerWidth) {
            setActiveCoordinates(() => getCoordinates(activeItemRef.current, activeItemRef.current.clientWidth));
            setContainerCoordinates(() => getCoordinates(carouselSlideRef.current, containerWidth));
        }
    }, [activeItemRef, containerWidth]);


    useEffect(() => {
        isActiveTabVisible(containerCoordinates, activeCoordinates)
    }, [activeCoordinates, containerCoordinates]);

    // Check if active tab is visible
    const getCoordinates = (el, elWidth) => {
        let coordinates = {};
        coordinates.left = Math.round(el.getBoundingClientRect().right);
        coordinates.right = Math.round(coordinates.left + elWidth);
        return coordinates;
    };

    const isActiveTabVisible = (containerCoordinates, tabCoordinates) => {
        if (containerCoordinates.left <= tabCoordinates.left && containerCoordinates.right >= tabCoordinates.right) {
            // Completely visible
            // Should not slide
        }
        if (containerCoordinates.left >= tabCoordinates.left && containerCoordinates.right >= tabCoordinates.right) {
            // Not completely visible or visible at all from the left (it does not matter, because it always goes back to the first position)
            // Slide to right with (containerCoordinates.left - tabCoordinates.left)
        }
        if (containerCoordinates.left <= tabCoordinates.left && containerCoordinates.right <= tabCoordinates.right && (tabCoordinates.left - containerCoordinates.left) < containerCoordinates) {
            // Not completely visible from the right so it should move left with the width of it's invisible part
            // Slide to left with (tabCoordinates.right - containerCoordinates.right)
        }
        if (containerCoordinates.left <= tabCoordinates.left && containerCoordinates.right <= tabCoordinates.right && (tabCoordinates.left - containerCoordinates.left) >= containerCoordinates) {
            // Not visible at all from the right so it should go to first position
            // Slide to left with (tabCoordinates.left - containerCoordinates.left)
        }
    };

    return {
        activeTabState: {

        },
        activeTabHandlers: {
            getCoordinates,
            isActiveTabVisible
        },
    };


};

export default useActiveTab;