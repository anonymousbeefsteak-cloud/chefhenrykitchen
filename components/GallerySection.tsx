import React from 'react';

interface GallerySectionProps {
    onImageClick: (src: string) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ onImageClick }) => {
    const galleryImages = [
        { src: 'https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/wellington-1920w.jpg', alt: 'Beef Wellington dish' },
        { src: 'https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/duck+brest-1920w.jpg', alt: 'Roasted Duck Breast dish' },
        { src: 'https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/cheese+cake-1920w.jpg', alt: 'Signature Cheesecake dessert' },
        { src: 'https://lirp.cdn-website.com/0015f2f5/dms3rep/multi/opt/bouiabsa-6c0226f0-1920w.jpg', alt: 'Bouillabaisse Marseillaise soup' }
    ];

    const handleKeyDown = (event: React.KeyboardEvent, src: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scrolling on spacebar press
            onImageClick(src);
        }
    };

    return (
        <section id="gallery" className="py-20 bg-white/90 relative z-10 w-full">
            <div className="container mx-auto px-5 text-center">
                <h2 className="text-4xl mb-12">Food Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {galleryImages.map(({ src, alt }, index) => (
                        <div
                            key={index}
                            className="h-80 bg-cover bg-center relative overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-colore-cinque focus:ring-offset-2 rounded-md"
                            style={{ backgroundImage: `url(${src})` }}
                            onClick={() => onImageClick(src)}
                            onKeyDown={(e) => handleKeyDown(e, src)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View larger image of ${alt}`}
                        >
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;