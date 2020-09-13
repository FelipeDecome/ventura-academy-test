import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import AppContext from '../../context/AppContext';

import './styles.css';

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { registerAction } = useContext(AppContext);

    useEffect(() => {
        const actionName = isPlaying ? 'start' : 'pause';

        registerAction(actionName);
    }, [isPlaying, registerAction]);

    function handlePlayPauseVideo() {
        setIsPlaying(!isPlaying);
    }

    return (
        <>
            <ReactPlayer
                className="player"
                url="https://www.youtube.com/embed/LJePn9kCH84"
                controls
                playing={isPlaying}
                onPlay={handlePlayPauseVideo}
                onPause={handlePlayPauseVideo}
            />
        </>
    );
};

export default VideoPlayer;
