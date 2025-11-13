
import React, { useState, useEffect, useCallback } from 'react';

const slides = [
    {
        image: 'https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/rest-1920w.jpg',
        title: "Henry's Kitchen Pasta & Grill",
        subtitle: 'An Exquisite Pasta & Grill Experience'
    },
    {
        image: 'https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/vacation+nov-1920w.jpg',
        title: 'By Appointment Only',
        subtitle: 'Please book one day in advance and pre-order your meal.'
    },
    {
        image: 'https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/new+year+note-1920w.jpg',
        title: 'A Fine Dining Experience',
        subtitle: 'You are welcome to bring your own wine. Corkage fee is $30 per 750ml.'
    }
];

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="home" className="h-screen relative">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                        <div className="text-center text-white max-w-3xl p-5 z-10 bg-black bg-opacity-60 rounded-lg mx-4">
                            <h1 className="text-4xl md:text-6xl mb-4 tracking-wider">{slide.title}</h1>
                            <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;