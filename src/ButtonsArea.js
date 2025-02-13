import React, {useRef, useState} from 'react';
import './components.scss';
import StaticButon from "./StaticButon";
import MovableButton from "./MovableButton";

const ButtonsArea = ({
                         updateParentCountState=null
                     }) => {

    const [totalClicks, setTotalClicks] = useState(0)

    const updateTotalClicks = () => {
        setTotalClicks(totalClicks+1)
    }

    if (totalClicks >= 20) {
        return <></>
    }

    return (
        <div className="buttons-area">

            <StaticButon
                totalClicksFromBtnsArea={updateTotalClicks}
                updateParentCountState={updateParentCountState}
            />

            <MovableButton
            />

        </div>
    )
}
export default ButtonsArea;