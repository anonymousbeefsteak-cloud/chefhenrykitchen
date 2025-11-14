
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

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby-ZPMg0fXJLjhHtC7ExH5PE7nF7YIkCAYphWtolJlUhLfuLa8zwRkqVo3BYcPNb7Nl/exec';

const App: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [menu, setMenu] = useState<MenuCategory[]>([]);
    const [flatMenu, setFlatMenu] = useState<MenuItem[]>([]);
    const [isLoadingMenu, setIsLoadingMenu] = useState(true);
    const [menuError, setMenuError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(`${SCRIPT_URL}?action=getMenu`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                if (result.status === 'success') {
                    const menuItems: MenuItem[] = result.data;
                    setFlatMenu(menuItems);

                    // Group items by category
                    const groupedMenu = menuItems.reduce<Record<string, MenuItem[]>>((acc, item) => {
                        const category = item.category || 'Uncategorized';
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        // Only add available items to be displayed on the menu
                        if (item.status === 'Available') {
                           acc[category].push(item);
                        }
                        return acc;
                    }, {});

                    const menuCategories: MenuCategory[] = Object.keys(groupedMenu).map(title => ({
                        title,
                        items: groupedMenu[title]
                    }));
                    
                    setMenu(menuCategories);
                } else {
                    throw new Error(result.message || 'Failed to fetch menu data.');
                }
            } catch (error) {
                console.error("Error fetching menu:", error);
                setMenuError(error instanceof Error ? error.message : String(error));
            } finally {
                setIsLoadingMenu(false);
            }
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
                fullMenu={flatMenu}
            />

            {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
            
            <main>
                <HeroSlider />
                <AboutSection />
                <MenuSection 
                    menu={menu}
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
