
import React, { useState } from 'react';

const FullscreenPrompt: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const enterFullscreen = () => {
        document.documentElement.requestFullscreen().then(() => {
            setIsVisible(false);
        }).catch(err => {
            console.error(`Fullscreen request failed: ${err.message}`);
            setIsVisible(false); // Hide even if it fails
        });
    };
    
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-[9999] text-white text-center backdrop-blur-sm">
            <p className="text-2xl mb-6">Enter Fullscreen for a Better Visual Experience</p>
            <button
                onClick={enterFullscreen}
                className="px-8 py-4 bg-orange-600 text-white rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:scale-105"
            >
                Enter Fullscreen
            </button>
        </div>
    );
};

export default FullscreenPrompt;
