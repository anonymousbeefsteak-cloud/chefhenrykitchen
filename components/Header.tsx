import React, { useState, useEffect } from 'react';

interface HeaderProps {
    onCartClick: () => void;
    cartItemCount: number;
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount, onMenuClick }) => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`bg-colore-quattro p-4 fixed w-full top-0 z-[1000] flex justify-between items-center transition-transform duration-300 ease-in-out ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <a href="#home" className="text-white font-bodoni text-xl md:text-2xl w-2/3 md:w-auto">
                <h2>Henry's Kitchen Pasta & Grill</h2>
            </a>
            
            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-5">
                    <a href="#reservations" className="bg-colore-cinque text-white px-5 py-2 text-sm tracking-widest font-semibold transition-colors hover:bg-colore-nove">
                        BOOK NOW
                    </a>
                    <button onClick={onCartClick} className="relative text-white text-2xl" aria-label="Open shopping cart">
                        <i className="fas fa-shopping-cart"></i>
                        {cartItemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                </div>

                <button onClick={onCartClick} className="relative text-white text-2xl lg:hidden" aria-label="Open shopping cart">
                    <i className="fas fa-shopping-cart"></i>
                    {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
                </button>
                
                <button onClick={onMenuClick} className="lg:hidden text-white text-2xl bg-transparent border-none cursor-pointer z-[1001]" aria-label="Open mobile menu">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
