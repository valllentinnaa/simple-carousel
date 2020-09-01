import React, {useEffect, useRef, useState} from "react";
import './index.css';
import CarouselItem from "./components/CarouselItem";
import useCarousel from "./hooks/useCarousel";
import CarouselArrowsContainer from "./components/CarouselArrowsContainer";

const Carousel = ({
                      id = 'Test',
                      itemWidth = 0,
                      carouselClass = '',
                      arrowClass = '',
                      arrows = true,
                      carouselItemClass = '',
                      items
                  }) => {

    const carouselSlideId = `carousel-slide-${id}`;

    const carouselSlideRef = useRef(null);


    const [activeItem, setActiveItem] = useState({});
    const [itemsCollection, setItemsCollection] = useState([]);
    const [itemsCollectionLength, setItemsCollectionLength] = useState(0);

    useEffect(() => {
        if (Object.keys(items).length) {
            const itemsArr = Array.from(items);
            setActiveItem(itemsArr.find(item => item.props["data-selected"]));
            setItemsCollectionLength(itemsArr.length);

            const itemsToRender = items.map((item, i) => <CarouselItem
                width={itemWidth}
                className={carouselItemClass}
                key={`${id}-item-${i}`}
            >{item}</CarouselItem>);
            setItemsCollection(itemsToRender);
        }
    }, [items]);

    const {carouselState, carouselHandlers} = useCarousel(
        carouselSlideId,
        id,
        carouselSlideRef,
        itemWidth,
        activeItem,
        itemsCollectionLength
    );

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
                        clickHandler={carouselHandlers.changeCounter}
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
                            {itemsCollection}
                    </div>
                </div>
            </div>
        </>

    )
};

export default Carousel;