import React, {useEffect, useState} from "react";
import './components.scss';
import AnimatedIcons from "./AnimatedIcons";

const StaticButon = ({
                         ref=null,
                         totalClicksFromBtnsArea=null,
                         updateParentCountState=null
                     }) => {

    const [position, setPosition] = useState({ x: (window.innerWidth)/2 +120, y: (window.innerHeight)/2 -20 });
    const [btnProps, setBtnProps] = useState({ name: 'Yes', w: 62, h: 40 , fs: '16'});

    const handleOnClick = () => {
        if (null != updateParentCountState) {
            updateParentCountState()
            totalClicksFromBtnsArea()
        }

        let w = document.getElementsByClassName('static-button').item(0).clientWidth * 1.2;
        let h = document.getElementsByClassName('static-button').item(0).clientHeight * 1.2;

        setBtnProps({name: 'are u sure?', w: w, h: h, fs: btnProps.fs * 1.1});
    };

    return (
        <div id={'static-button-id'}>
            <button
                className="static-button"
                onClick={() => handleOnClick()}
                style={{
                    width: `${btnProps.w}px`,
                    height: `${btnProps.h}px`,
                    position: 'absolute',
                    top: `${position.y}px`,  // Using vh units for vertical positioning
                    left: `${position.x}px`, // Using vw units for horizontal positioning
                    transition: 'top 0.2s, left 0.2s', // smooth transition
                }}
            >
                <div
                style={{
                    fontSize: `${btnProps.fs}px`,
                }}>
                    {btnProps.name}
                </div>
            </button>
        </div>

    )
}
export default StaticButon;