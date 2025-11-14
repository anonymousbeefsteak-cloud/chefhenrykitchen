
import React from 'react';
import MenuItemComponent from './MenuItem';
import type { MenuItem, MenuCategory } from '../types';

interface MenuSectionProps {
    menu: MenuCategory[];
    isLoading: boolean;
    error: string | null;
    onAddToCart: (item: MenuItem) => void;
    onImageClick: (src: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menu, isLoading, error, onAddToCart, onImageClick }) => {
    
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="text-center py-10">
                    <i className="fas fa-spinner fa-spin text-4xl text-colore-cinque"></i>
                    <p className="mt-4 text-lg text-colore-tre">Loading Our Exquisite Menu...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="text-center py-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Oops!</strong>
                    <span className="block sm:inline"> We couldn't load the menu. Please try refreshing the page.</span>
                    <p className="text-sm mt-2">{error}</p>
                </div>
            );
        }

        if (menu.length === 0) {
            return (
                <div className="text-center py-10">
                    <p className="text-lg text-colore-tre">Our menu is currently unavailable. Please check back later.</p>
                </div>
            );
        }

        return menu.map(category => (
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
        ));
    };

    return (
        <section id="menu" className="py-20 bg-colore-uno/90 relative z-10 w-full">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl text-center mb-12">Our Menu</h2>
                {renderContent()}
            </div>
        </section>
    );
};

export default MenuSection;
