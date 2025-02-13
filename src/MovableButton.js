import React, {useEffect, useRef, useState} from "react";
import './components.scss';

const MovableButton = ({
                           referenceComponent= null,
                       }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const myRef = useRef(null);

    useEffect(() => {
        setPosition({
            x: (window.innerWidth)/2 - 190, // 2% margin to the right
            y: (window.innerHeight)/2 - 20 ,    // Same vertical position as reference
        });
    }, []);

    const getRandomPosition = () => {
        const maxX = window.innerWidth - 100; // Assuming button width is 100px
        const maxY = window.innerHeight - 50;  // Assuming button height is 50px
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        console.log('new pos X: ', randomX);
        console.log('new pos Y: ', randomY);
        return { x: randomX, y: randomY };
    };

    // React state to keep track of the button position
    const handleMouseEnter = () => {
        // console.log('asdasd')
        const newPosition = getRandomPosition();

        setPosition(newPosition);
    };

    return (
        <button
            ref={myRef}
            onMouseEnter={handleMouseEnter}
            onClick={() => handleMouseEnter()}
            className="move-button"
            // disabled
            style={{
                height: `40px`,
                position: 'absolute',
                top: `${position.y}px`,
                left: `${position.x}px`,
                transition: 'top 0.2s, left 0.2s', // smooth transition
            }}
        >
            NO!!!
        </button>
    )
}
export default MovableButton;