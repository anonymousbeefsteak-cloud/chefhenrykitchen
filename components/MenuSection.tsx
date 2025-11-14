
import React from 'react';
import MenuItemComponent from './MenuItem';
import type { MenuItem, MenuCategory } from '../types';

interface MenuSectionProps {
    menuData: MenuCategory[];
    isLoading: boolean;
    error: string | null;
    onAddToCart: (item: MenuItem) => void;
    onImageClick: (src: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuData, isLoading, error, onAddToCart, onImageClick }) => {
    return (
        <section id="menu" className="py-20 bg-colore-uno/90 relative z-10 w-full">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl text-center mb-12">Our Menu</h2>
                {isLoading && (
                    <div className="text-center text-colore-tre">
                        <i className="fas fa-spinner fa-spin text-3xl"></i>
                        <p className="mt-2">Loading our delicious menu...</p>
                    </div>
                )}
                {error && <p className="text-center text-red-500">{error}</p>}
                
                {!isLoading && !error && menuData.map(category => (
                    <div key={category.title} className="mb-16">
                        <h3 className="text-3xl text-center text-colore-quattro mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-colore-cinque">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.items.map(item => (
                                <MenuItemComponent key={item.id} item={item} onAddToCart={onAddToCart} onImageClick={onImageClick} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuSection;
