import React from 'react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const menuItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#menu", label: "Menu" },
        { href: "#store-info", label: "Store Info" },
        { href: "#gallery", label: "Gallery" },
        { href: "#reservations", label: "Booking" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black bg-opacity-70 z-[1001] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            ></div>
            <div className={`fixed top-0 right-0 h-full w-64 bg-colore-quattro shadow-2xl z-[1002] transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-8">
                    <button onClick={onClose} className="self-end text-white text-3xl mb-8" aria-label="Close mobile menu">&times;</button>
                    <nav>
                        <ul className="space-y-4">
                            {menuItems.map(item => (
                                <li key={item.label}>
                                    <a href={item.href} onClick={onClose} className="text-colore-due hover:text-white text-xl transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-auto flex justify-center gap-6">
                        <a href="#" aria-label="Visit our Instagram page" className="text-colore-due hover:text-white text-xl transition-colors"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Visit our Facebook page" className="text-colore-due hover:text-white text-xl transition-colors"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Visit our Twitter page" className="text-colore-due hover:text-white text-xl transition-colors"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
