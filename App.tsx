
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import StoreInfoSection from './components/StoreInfoSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import ImageModal from './components/ImageModal';
import SideMenu from './components/SideMenu';
import MobileMenu from './components/MobileMenu';
import FullscreenPrompt from './components/FullscreenPrompt';
import VideoBackground from './components/VideoBackground';
import type { CartItem, MenuItem, MenuCategory } from './types';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz0xGssICWadYoVLblU5lwEDfupKWRgOO_4hLwOYoQI2ddFSrDBe8Unzv7NutFBtbdfUA/exec';

const App: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const [menuData, setMenuData] = useState<MenuCategory[]>([]);
    const [isLoadingMenu, setIsLoadingMenu] = useState(true);
    const [menuError, setMenuError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenu = () => {
            const callbackName = 'jsonp_callback_menu';
            window[callbackName] = (result: { status: string; data?: MenuCategory[]; message?: string }) => {
                if (result.status === 'success' && result.data) {
                    // Filter out items that are "Sold Out"
                    const availableMenu = result.data.map(category => ({
                        ...category,
                        items: category.items.filter(item => item.status !== 'Sold Out')
                    })).filter(category => category.items.length > 0);
                    setMenuData(availableMenu);
                } else {
                    setMenuError(result.message || 'Failed to load the menu.');
                }
                setIsLoadingMenu(false);
                delete window[callbackName];
                document.getElementById(callbackName)?.remove();
            };

            const script = document.createElement('script');
            script.id = callbackName;
            script.src = `${SCRIPT_URL}?action=getMenu&callback=${callbackName}&t=${new Date().getTime()}`;
            script.onerror = () => {
                setMenuError('An error occurred while trying to fetch the menu.');
                setIsLoadingMenu(false);
            };
            document.head.appendChild(script);
        };
        fetchMenu();
    }, []);

    const handleAddToCart = (item: MenuItem) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const handleRemoveFromCart = (itemId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const handleUpdateQuantity = (itemId: string, quantity: number) => {
        if (quantity <= 0) {
            handleRemoveFromCart(itemId);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === itemId ? { ...item, quantity } : item
                )
            );
        }
    };

    const handleClearCart = () => {
      setCartItems([]);
    };

    const handleOpenImage = (src: string) => {
        setSelectedImage(src);
    };

    return (
        <div className="bg-white font-roboto">
            <FullscreenPrompt />
            <VideoBackground />

            <Header 
                onCartClick={() => setIsCartOpen(true)} 
                cartItemCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onMenuClick={() => setIsMobileMenuOpen(true)}
            />
            
            <SideMenu />
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            
            <ShoppingCart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onRemove={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
                onClearCart={handleClearCart}
                onAddToCart={handleAddToCart}
                menuData={menuData}
            />

            {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
            
            <main>
                <HeroSlider />
                <AboutSection />
                <MenuSection 
                    menuData={menuData} 
                    isLoading={isLoadingMenu} 
                    error={menuError}
                    onAddToCart={handleAddToCart} 
                    onImageClick={handleOpenImage} 
                />
                <StoreInfoSection />
                <GallerySection onImageClick={handleOpenImage} />
                <BookingSection />
            </main>
            
            <Footer />
        </div>
    );
};

export default App;