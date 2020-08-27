import React, {useRef} from "react";
import './index.css';
import CarouselItem from "./components/CarouselItem";
import useCarousel from "./hooks/useCarousel";
import CarouselArrowsContainer from "./components/CarouselArrowsContainer";

const Carousel = ({
                      id = 'Test',
                      itemWidth = '',
                      carouselClass = '',
                      arrowClass = '',
                      arrows = true,
                      carouselItemClass = '',
                      items
                  }) => {
    console.log(items);
    const carouselSlideId = `carousel-slide-${id}`;
    const carouselSlideRef = useRef(null);
    const carouselItemsRef = useRef(null);

    const {carouselState, carouselHandlers} = useCarousel(carouselSlideId, id, carouselSlideRef, carouselItemsRef, itemWidth);

    const renderCarouselItems = () => items ? items.map((item) => <CarouselItem width={itemWidth}
                                                                                className={carouselItemClass}>{item}</CarouselItem>) : null;

    return (
        <>
            <div className={`carousel ${carouselClass}`}>
                {
                    (carouselState.isScrollEnabled && arrows) &&
                    <CarouselArrowsContainer
                        prevArrowContent={<div>Prev</div>}
                        nextArrowContent={<div>Next</div>}
                        arrowClass={arrowClass}
                        id={id}
                        clickHandler={carouselHandlers.slide}
                        counter={carouselState.counter}
                        availableScrollTimes={carouselState.availableScrollTimes}
                    />
                }
                <div className="carousel-container">
                    <div
                        id={carouselSlideId}
                        className="carousel-slide"
                        ref={carouselSlideRef}
                        style={{transform: carouselState.transform}}
                    >
                        <div ref={carouselItemsRef} className="carousel-items-container">
                            {renderCarouselItems()}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Carousel;