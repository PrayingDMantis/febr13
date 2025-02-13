import React, {useEffect, useRef, useState} from 'react';
import './components.scss';
import Title from "./Title";
import ButtonsArea from "./ButtonsArea";
import animation1 from "./anim1.gif";
import animation2 from "./anim2.gif";


const App = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // Load YouTube Iframe API script dynamically
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);

        // Once the API is ready, create a player instance
        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('youtube-embed', {
                videoId: 'XZfyyk0_Yqs', // Replace with your video ID
                events: {
                    onReady: (event) => {
                        event.target.playVideo();
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            event.target.playVideo(); // Loop the video if needed
                        }
                    },
                },
                playerVars: {
                    autoplay: 1,
                    mute: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                },
            });
        };
    }, );

    const updateCountState = () => {
        console.log('updating parent ' + count)
        setCount(count + 1);
    }

    const getAnimationByCounter = () => {
        if (count < 20) {
            return animation1
        }
        return animation2;
    };

    return (
        <div className="febr13-app-wrapper">
            <div id="youtube-embed" style={{display: 'none'}}></div>
            <div
                className='title-wrapper'>
                <Title
                    text={'Will you be my e-Valentine?'}
                />
            </div>

            <div
            style={{
                display: 'flex',
                justifyContent: 'center'}}
            >
                <img
                    src={getAnimationByCounter()}
                    alt="Animated GIF"
                />
            </div>

            <ButtonsArea
                updateParentCountState={updateCountState}
            />

        </div>
    )
}
export default App;
