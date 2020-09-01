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
            name: 'ACTIVE',
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
            name: 'ACTIVE2',
            num: '4'
        },
        {
            name: 'lest',
            num: '5'
        },
    ];
    const [payload, setPayload] = useState([]);
    const [active, setActive] = useState('ACTIVE');

    useEffect(() => {
        const payload = itemsValues.map((item) => <button
            onClick={(e) => {
                e.preventDefault();
                setActive('ACTIVE2');
            }}
            key={item.name}
            className="tested"
            data-selected={item.name === active}
        >{item.name}<span>{item.num}</span></button>);
        setPayload(payload);
    }, [active]);

    return (
        <>
            <div className="test-container-1">
                <Carousel
                    id="test-container-1"
                    itemWidth={200}
                    items={payload}
                    activeItem={active}
                />
            </div>
        </>
    )
};

export default Container;
