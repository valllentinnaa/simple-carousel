import React, {useEffect} from "react";
import './index.css';
import CarouselItem from "./components/CarouselItem";
import CarouselArrow from "./components/CarouselArrow";
import useCarousel from "./hooks/useCarousel";
import CarouselArrowsContainer from "./components/CarouselArrowsContainer";

const Carousel = ({slidesNum=Number, carouselClass='', carouselArrowClass='', arrows=true, carouselItemClass='carousel-item'}) => {

    const {carouselState, carouselHandlers} = useCarousel(slidesNum);

    function createCarousel(slidesNum) {
        const carouselSlide = document.querySelector('.carousel-slide');
        const carouselItems = document.querySelectorAll('.carousel-slide .item');

        //Buttons
        const prevBtn = document.querySelector('.prevBtn');
        const nextBtn = document.querySelector('.nextBtn');

        //Counter
        let counter = 0;
        const size = carouselItems[0].clientWidth * 3;

        //Transforming by CSS and dynamic vars
        function transform(size, counter) {
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        }

        //Transitioning by css
        function transition() {
            carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        }

        //Button listeners
        nextBtn.addEventListener('click', () => {
            if (counter === Math.floor(carouselItems.length / slidesNum)) {
                counter = -1;
            }
            transition();
            counter++;
            transform(size, counter);
        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) {
                counter = Math.floor(carouselItems.length / slidesNum);
            }
            transition();
            counter--;
            transform(size, counter);
        });
    }

    useEffect(() => {
        createCarousel(3);
    }, []);

    return (
        <>
            <div className={`carousel ${carouselClass}`}>
                {
                    (carouselState.isScrollEnabled && arrows) &&
                    <CarouselArrowsContainer
                        leftArrowContent={<div>Prev</div>}
                        rightArrowContent={<div>Next</div>}
                        arrowClass=''
                    />
                }
                <div className="carousel-container">
                    <div className="carousel-slide">
                        <div className="carousel-items-container">
                            <CarouselItem className={carouselItemClass}>1</CarouselItem>
                            <CarouselItem className={carouselItemClass}>2</CarouselItem>
                            <CarouselItem className={carouselItemClass}>3</CarouselItem>
                            <CarouselItem className={carouselItemClass}>4</CarouselItem>
                            <CarouselItem className={carouselItemClass}>5</CarouselItem>
                            <CarouselItem className={carouselItemClass}>6</CarouselItem>
                            <CarouselItem className={carouselItemClass}>7</CarouselItem>
                            <CarouselItem className={carouselItemClass}>8</CarouselItem>
                            <CarouselItem className={carouselItemClass}>9</CarouselItem>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Carousel;