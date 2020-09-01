import React, {useEffect, useState} from "react";

const useActiveTab = (carouselContainerRef, counter, carouselItemsRef,
                      activeIndex) => {
    const [activeCoordinates, setActiveCoordinates] = useState({});
    const [containerCoordinates, setContainerCoordinates] = useState({});
    const [activeTabWidth, setActiveTabWidth] = useState(0);

    useEffect(() => {
        console.log(carouselItemsRef.current.children);
        if (carouselItemsRef.current.children.item(activeIndex)) {
            setActiveCoordinates(() => getCoordinates(carouselItemsRef.current.children.item(activeIndex)));
            setContainerCoordinates(() => getCoordinates(carouselContainerRef.current));
            setActiveTabWidth(carouselItemsRef.current.children.item(activeIndex).clientWidth);
        }
    }, [counter, activeIndex]);


    useEffect(() => {
        isActiveTabVisible(containerCoordinates, activeCoordinates);
    }, [activeCoordinates, containerCoordinates]);

    // Check if active tab is visible
    const getCoordinates = (el) => {
        let coordinates = {};
        //https://javascript.info/coordinates
        //https://www.w3.org/TR/geometry-1/#domrect
        coordinates.left = Math.round(el.getBoundingClientRect().left);
        coordinates.right = Math.round(el.getBoundingClientRect().right);
        return coordinates;
    };

    const isActiveTabVisible = (containerCoordinates, tabCoordinates) => {
        const leftWidthDiff = tabCoordinates.left - carouselContainerRef.current.clientWidth;
        const rightWidthDiff = tabCoordinates.right - carouselContainerRef.current.clientWidth;

        if (containerCoordinates.right <= tabCoordinates.left) {
            console.log('Not visible at all from the right');
        }
        if (containerCoordinates.left >= tabCoordinates.right) {
            console.log('Not visible at all from the left');
        }
        /*  if (containerCoordinates.left <= tabCoordinates.left && containerCoordinates.right >= tabCoordinates.right) {
              console.log('Completely visible');
              // Completely visible
              // Should not slide
          }
          if (containerCoordinates.left >= tabCoordinates.left && containerCoordinates.right >= tabCoordinates.right) {
              console.log('Not completely visible or visible at all from the left');
              // Not completely visible or visible at all from the left (it does not matter, because it always goes back to the first position)
              // Slide to right with (containerCoordinates.left - tabCoordinates.left)
          }
          if (containerCoordinates.left <= tabCoordinates.left && containerCoordinates.right <= tabCoordinates.right && (tabCoordinates.left - containerCoordinates.left) < containerCoordinates) {
              console.log('Not completely visible from the right');
              // Not completely visible from the right so it should move left with the width of it's invisible part
              // Slide to left with (tabCoordinates.right - containerCoordinates.right)
          }
          if (containerCoordinates.left <= tabCoordinates.left && containerCoordinates.right <= tabCoordinates.right && (tabCoordinates.left - containerCoordinates.left) >= containerCoordinates) {
              console.log('Not visible at all from the right');
              // Not visible at all from the right so it should go to first position
              // Slide to left with (tabCoordinates.left - containerCoordinates.left)
          }*/

        console.log(activeCoordinates);
        console.log(containerCoordinates);
        /*   if (tabCoordinates.left - containerCoordinates.left >= containerWidth && tabCoordinates.right - containerCoordinates.right < activeTabWidth) {
               console.log('Not completely visible from the right');
           }*/

    };

    return {
        activeTabState: {},
        activeTabHandlers: {
            getCoordinates,
            isActiveTabVisible
        },
    };


};

export default useActiveTab;