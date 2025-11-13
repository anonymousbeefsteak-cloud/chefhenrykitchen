
import React from 'react';

const BookingSection: React.FC = () => {
    return (
        <section id="reservations" className="py-20 relative z-10 w-full bg-black/90 text-white text-center">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl mb-6">Book Your Table</h2>
                <p className="max-w-3xl mx-auto text-lg text-colore-due mb-8">
                    Please book one day in advance and pre-order your meal to enjoy our meticulously prepared pasta and grill dishes. We look forward to providing you with an unforgettable dining experience.
                </p>
                <a 
                    href="tel:7783558787" 
                    className="inline-block bg-colore-cinque text-white px-10 py-4 text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-colore-nove hover:scale-105"
                >
                    CALL TO BOOK NOW
                </a>
            </div>
        </section>
    );
};

export default BookingSection;
