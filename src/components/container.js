import React, {useEffect, useState} from "react";
import './../assets/styles/index.css';
import Carousel from "../carousel";

const Container = () => {

    const itemsValues = [
        {
            name: 'test',
            num: '1'
        },
        {
            name: 'mest',
            num: '2'
        },
        {
            name: 'test',
            num: '3'
        },
        {
            name: 'jest',
            num: '4'
        },
        {
            name: 'test',
            num: '5'
        },
        {
            name: 'test',
            num: '1'
        },
        {
            name: 'mest',
            num: '2'
        },
        {
            name: 'test',
            num: '3'
        },
        {
            name: 'mest',
            num: '4'
        },
        {
            name: 'lest',
            num: '5'
        },
    ];
    const [payload, setPayload] = useState([]);
    const [payload1, setPayload1] = useState([]);

   useEffect(() => {
       const payload = itemsValues.map((item) => <div key={item.name}>{item.name}<span className="red">{item.num}</span></div>);
       setPayload(payload);
   }, []);

    useEffect(() => {
        const payload = itemsValues.map((item) => <div key={item.name}>{item.name}<span className="red">{item.num}</span></div>);
        setPayload1(payload);
    }, []);


    return (
        <>
            <div className="test-container-1">
                <Carousel
                    id="test-container-1"
                    itemWidth={200}
                    items={payload}
                    activeItem="jest"
                />
            </div>
            <div className="test-container-2">
                <Carousel
                    id="test-container-1"
                    itemWidth={200}
                    items={payload1}
                    arrowClass='rounded'
                    itemsContainerClass='carousel-test-class'
                    activeItem="lest"
                />
            </div>
        </>
    )
};

export default Container;
