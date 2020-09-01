import useCarousel from "./useCarousel";
import useActiveTab from "./useActiveTab";

const useCarouselHooks = (
    carouselSlideRef,
    itemWidth,
    activeItem,
    activeItemIndex,
    itemsCollectionLength,
    carouselContainerRef) => {

    // Call the slide and carousel functionality
    const {carouselState, carouselHandlers} = useCarousel(
        carouselSlideRef,
        itemWidth,
        itemsCollectionLength
    );

    // Call the active tab functionality
    const {activeTabState, activeTabHandlers} = useActiveTab(
        carouselState.counter,
        carouselSlideRef,
        carouselContainerRef,
        activeItemIndex
    );

    // Call the overflow dropdown functionality

    return {
        state: {
            isScrollEnabled: carouselState.isScrollEnabled,
            transform: carouselState.transform,
            counter: carouselState.counter,
            availableScrollTimes: carouselState.availableScrollTimes
        },
        handlers: {
            slide: carouselHandlers.slide,
            changeCounter: carouselHandlers.changeCounter
        },
    };
};

export default useCarouselHooks;