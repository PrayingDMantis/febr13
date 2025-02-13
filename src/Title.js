import React from 'react';
import './components.scss';

const Title = ({
                text=''
               }) => {

    return (
        <div
            className={'title-wrapper'}
        >
            {text}
        </div>
    )
}
export default Title;