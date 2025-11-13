
import React from 'react';
import type { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
    item: MenuItemType;
    onAddToCart: (item: MenuItemType) => void;
    onImageClick: (src: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart, onImageClick }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
            <div 
                className="h-56 bg-cover bg-center cursor-pointer" 
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => onImageClick(item.image)}
                role="button"
                aria-label={`View larger image of ${item.name}`}
            ></div>
            <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold mb-2 text-colore-quattro">{item.name}</h4>
                <p className="text-colore-tre mb-4 text-sm flex-grow">{item.description}</p>
                <div className="mt-auto flex justify-between items-center">
                    <div className="text-colore-cinque font-bold text-lg">{item.price}</div>
                    <button 
                        onClick={() => onAddToCart(item)}
                        className="bg-colore-sette text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
                        aria-label={`Add ${item.name} to cart`}
                    >
                        <i className="fas fa-cart-plus"></i>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;