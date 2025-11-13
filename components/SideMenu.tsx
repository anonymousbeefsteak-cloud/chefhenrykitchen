
import React, { useState, useEffect } from 'react';

const menuItems = [
    { href: "#home", icon: "fas fa-home", label: "Home" },
    { href: "#about", icon: "fas fa-info-circle", label: "About Us" },
    { href: "#menu", icon: "fas fa-utensils", label: "Menu" },
    { href: "#store-info", icon: "fas fa-map-marker-alt", label: "Store Info" },
    { href: "#gallery", icon: "fas fa-image", label: "Gallery" },
    { href: "#reservations", icon: "fas fa-calendar-alt", label: "Booking" },
    { href: "#contact", icon: "fas fa-phone", label: "Contact" },
];

const SideMenu: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsHidden(scrollTop > lastScrollTop && scrollTop > 200);
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-[999] transition-transform duration-300 ${isHidden ? '-translate-x-full' : 'translate-x-0'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-colore-quattro rounded-r-lg shadow-lg p-3 transition-all duration-300 ease-in-out" style={{ width: isHovered ? '250px' : '70px' }}>
                <nav>
                    <ul className="space-y-2">
                        {menuItems.map(item => (
                            <li key={item.label}>
                                <a href={item.href} className="flex items-center text-colore-due hover:text-white transition-colors p-2 rounded-md overflow-hidden whitespace-nowrap">
                                    <i className={`${item.icon} text-xl w-12 text-center`}></i>
                                    <span className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideMenu;
