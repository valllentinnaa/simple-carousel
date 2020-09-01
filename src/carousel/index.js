import React, {useEffect, useRef, useState} from "react";
import './index.css';
import CarouselItem from "./components/CarouselItem";
import useCarouselHooks from "./hooks/useCarouselHooks";
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
    const carouselContainerRef = useRef(null);


    const [activeItem, setActiveItem] = useState({});
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [itemsCollection, setItemsCollection] = useState([]);
    const [itemsCollectionLength, setItemsCollectionLength] = useState(0);

    useEffect(() => {
        if (items.length) {
            setItemsCollectionLength(items.length);

            const itemsToRender = items.map((item, i) => {
                if(item.props["data-selected"]) {
                    setActiveItem(item);
                    setActiveItemIndex(i);
                }
                return <CarouselItem
                    width={itemWidth}
                    className={carouselItemClass}
                    key={`${id}-item-${i}`}
                >{item}</CarouselItem>
            });
            setItemsCollection(itemsToRender);
        }
    }, [items]);

    const {state, handlers} = useCarouselHooks(
        carouselSlideRef,
        itemWidth,
        activeItem,
        activeItemIndex,
        itemsCollectionLength,
        carouselContainerRef
    );


    return (
        <>
            <div className={`carousel ${carouselClass}`}>
                {
                    (state.isScrollEnabled && arrows) &&
                    <CarouselArrowsContainer
                        prevArrowContent={<div>Prev</div>}
                        nextArrowContent={<div>Next</div>}
                        arrowClass={arrowClass}
                        id={id}
                        clickHandler={handlers.changeCounter}
                        counter={state.counter}
                        availableScrollTimes={state.availableScrollTimes}
                    />
                }
                <div className="carousel-container" ref={carouselContainerRef}>
                    <div
                        id={carouselSlideId}
                        className="carousel-slide"
                        ref={carouselSlideRef}
                        style={{transform: state.transform}}
                    >
                            {itemsCollection}
                    </div>
                </div>
            </div>
        </>

    )
};

export default Carousel;