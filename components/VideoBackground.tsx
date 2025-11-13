
import React, { useRef, useState } from 'react';

const VideoBackground: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPaused(false);
            } else {
                videoRef.current.pause();
                setIsPaused(true);
            }
        }
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                >
                    <source src="https://assets.codepen.io/3364143/sample.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-slate-900/70"></div>
            </div>
            <div className="fixed bottom-5 right-5 z-50 flex gap-3">
                <button 
                    onClick={toggleMute} 
                    title={isMuted ? "Unmute" : "Mute"} 
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                    <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                </button>
                <button 
                    onClick={togglePlay} 
                    title={isPaused ? "Play" : "Pause"} 
                    aria-label={isPaused ? "Play video" : "Pause video"}
                    className="bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                    <i className={`fas ${isPaused ? 'fa-play' : 'fa-pause'}`}></i>
                </button>
            </div>
        </>
    );
};

export default VideoBackground;