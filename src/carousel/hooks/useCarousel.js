import React from "react";

const useCarousel = (slidesNum) => {
    const isScrollEnabled = true;
    return {
        carouselState: {
            isScrollEnabled
        },
        carouselHandlers: {

        },
    };
};

export default useCarousel;