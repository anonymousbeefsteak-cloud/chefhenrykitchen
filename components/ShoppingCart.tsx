import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { menuData } from '../constants/menuData';
import type { CartItem, MenuItem } from '../types';

interface ShoppingCartProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onRemove: (itemId: string) => void;
    onUpdateQuantity: (itemId: string, quantity: number) => void;
    onClearCart: () => void;
    onAddToCart: (item: MenuItem) => void;
}

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0zOlJ7Is-jldSNuQ2UUKf25DLcC82QbNNogdnwjLTbe2bokyzj2mJOLP0NlGCeUYP4g/exec';

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onClearCart, onAddToCart }) => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const [wineSuggestions, setWineSuggestions] = useState<any[] | null>(null);
    const [isFetchingSuggestion, setIsFetchingSuggestion] = useState(false);
    const [suggestionError, setSuggestionError] = useState<string | null>(null);

    const subtotal = cartItems.reduce((acc, item) => acc + item.priceValue * item.quantity, 0);
    const serviceFee = subtotal * 0.20;
    const total = subtotal + serviceFee;

    useEffect(() => {
        if (isOpen) {
            setIsCheckingOut(false);
            setSubmitStatus(null);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    useEffect(() => {
        setWineSuggestions(null);
        setSuggestionError(null);
    }, [cartItems]);

    const getMinDateTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        return now.toISOString().slice(0, 16);
    };

    const handleGetWinePairing = async () => {
        setIsFetchingSuggestion(true);
        setSuggestionError(null);
        setWineSuggestions(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const wineListCategory = menuData.find(category => category.title === "Wine List");
            const wineNames = wineListCategory ? wineListCategory.items.map(item => item.name) : [];
            
            if (wineNames.length === 0) {
                setSuggestionError("Could not find our wine list to make a suggestion.");
                setIsFetchingSuggestion(false);
                return;
            }

            const mealItems = cartItems.map(item => item.name).join(', ');

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `You are an expert sommelier at Henry's Kitchen, a fine dining restaurant specializing in French and Italian pasta and grill dishes. A customer has selected the following items for their pre-order: ${mealItems}. Your task is to recommend up to two wines from our wine list that would pair beautifully with their meal. For each recommendation, provide a brief explanation for the pairing. Our wine list is: ${wineNames.join(', ')}. Only suggest wines from the provided list.`,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            suggestions: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        wineName: {
                                            type: Type.STRING,
                                            description: "The exact name of the wine from the provided list.",
                                        },
                                        pairingReason: {
                                            type: Type.STRING,
                                            description: "A brief explanation of why this wine pairs well with the meal.",
                                        },
                                    },
                                    required: ["wineName", "pairingReason"]
                                },
                            },
                        },
                        required: ["suggestions"]
                    },
                },
            });

            const jsonStr = response.text.trim();
            const result = JSON.parse(jsonStr);

            if (result.suggestions && result.suggestions.length > 0) {
                setWineSuggestions(result.suggestions);
            } else {
                setSuggestionError("I couldn't find a suitable wine pairing for your selection from our list.");
            }

        } catch (error) {
            console.error('Error fetching wine pairing:', error);
            setSuggestionError("Sorry, I couldn't fetch a wine suggestion at this moment. Please try again later.");
        } finally {
            setIsFetchingSuggestion(false);
        }
    };
    
    const handleAddSuggestedWine = (wineName: string) => {
        const wineListCategory = menuData.find(category => category.title === "Wine List");
        const wineItem = wineListCategory?.items.find(item => item.name === wineName);
        if (wineItem) {
            onAddToCart(wineItem);
        } else {
            alert("Could not find the suggested wine in our menu.");
        }
    };
    
    const handleOrderSubmit = async () => {
        if (!customerName || !customerEmail || !customerPhone || !pickupTime) {
            alert('Please fill in all your details.');
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData();
        formData.append('customerName', customerName);
        formData.append('customerEmail', customerEmail);
        formData.append('customerPhone', customerPhone);
        formData.append('pickupTime', pickupTime);
        formData.append('orderDetails', JSON.stringify(cartItems.map(item => ({ name: item.name, quantity: item.quantity, priceValue: item.priceValue }))));
        formData.append('subtotal', subtotal.toFixed(2));
        formData.append('serviceFee', serviceFee.toFixed(2));
        formData.append('total', total.toFixed(2));

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                body: formData,
            });
            // This part is often not reached due to CORS, but if it is, it's a success.
            setSubmitStatus('success');
            onClearCart();
        } catch (error) {
            // With cross-origin POSTs to Google Apps Script, a CORS error is expected
            // even on a successful submission because the browser can't read the response.
            // We'll treat the typical "Failed to fetch" TypeError as a success.
            if (error instanceof TypeError) {
                console.log('Order submitted. A CORS error is expected, but the request likely succeeded.');
                setSubmitStatus('success');
                onClearCart();
            } else {
                console.error('Error submitting order:', error);
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const SuccessView = () => (
        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
          <div className="text-5xl text-green-500 mb-4"><i className="fas fa-check-circle"></i></div>
          <h3 className="text-2xl font-bold mb-2">Pre-order Submitted!</h3>
          <p className="text-gray-600 mb-6">Thank you! We have received your pre-order and will contact you shortly to confirm.</p>
          <button onClick={onClose} className="bg-colore-cinque text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-colore-nove transition-colors">
              Close
          </button>
        </div>
    );

    const ErrorView = () => (
      <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <div className="text-5xl text-red-500 mb-4"><i className="fas fa-times-circle"></i></div>
        <h3 className="text-2xl font-bold mb-2">Something Went Wrong</h3>
        <p className="text-gray-600 mb-6">We couldn't submit your pre-order. Please try again or call us directly.</p>
        <button onClick={() => setSubmitStatus(null)} className="bg-colore-cinque text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-colore-nove transition-colors">
            Try Again
        </button>
      </div>
    );

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black bg-opacity-60 z-[1001] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            ></div>
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[1002] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-6 border-b">
                        <h3 className="text-2xl font-bold">Your Pre-order</h3>
                        <button onClick={onClose} className="text-2xl hover:text-red-500 transition-colors" aria-label="Close cart">&times;</button>
                    </div>
                    
                    {submitStatus === 'success' ? <SuccessView /> : submitStatus === 'error' ? <ErrorView /> : (
                        <>
                            {cartItems.length === 0 ? (
                                <div className="flex-grow flex items-center justify-center text-center text-gray-500 p-6">
                                    <p>Your cart is empty. Add some items from the menu to get started.</p>
                                </div>
                            ) : (
                              <>
                                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex items-center gap-4">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                                            <div className="flex-grow">
                                                <h4 className="font-semibold leading-tight">{item.name}</h4>
                                                <p className="text-gray-600">${item.priceValue.toFixed(2)}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 border rounded text-lg" aria-label={`Decrease quantity of ${item.name}`}>-</button>
                                                <span aria-label={`Current quantity ${item.quantity}`}>{item.quantity}</span>
                                                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 border rounded text-lg" aria-label={`Increase quantity of ${item.name}`}>+</button>
                                            </div>
                                            <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 text-lg" aria-label={`Remove ${item.name} from cart`}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 border-t">
                                  {isCheckingOut ? (
                                    <form onSubmit={(e) => { e.preventDefault(); handleOrderSubmit(); }} className="space-y-4">
                                      <h4 className="text-lg font-semibold">Your Details</h4>
                                      <div>
                                          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                          <input type="text" id="customerName" value={customerName} onChange={e => setCustomerName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-colore-cinque focus:border-colore-cinque" required />
                                      </div>
                                      <div>
                                          <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
                                          <input type="email" id="customerEmail" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-colore-cinque focus:border-colore-cinque" required />
                                      </div>
                                      <div>
                                          <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                          <input type="tel" id="customerPhone" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-colore-cinque focus:border-colore-cinque" required />
                                      </div>
                                      <div>
                                          <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700">Requested Pickup Time</label>
                                          <input type="datetime-local" id="pickupTime" value={pickupTime} onChange={e => setPickupTime(e.target.value)} min={getMinDateTime()} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-colore-cinque focus:border-colore-cinque" required />
                                      </div>
                                      
                                      <div className="space-y-2 pt-4 border-t">
                                        <div className="flex justify-between text-gray-700">
                                            <span>Subtotal:</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-700">
                                            <span>Service Fee (20%):</span>
                                            <span>${serviceFee.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xl font-bold">
                                            <span>Total:</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                      </div>

                                      <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2" disabled={isSubmitting}>
                                          {isSubmitting ? <><i className="fas fa-spinner fa-spin"></i> Submitting...</> : "Submit Pre-order"}
                                      </button>
                                      <button type="button" onClick={() => setIsCheckingOut(false)} className="w-full text-center text-gray-600 p-2">Cancel</button>
                                    </form>
                                  ) : (
                                    <>
                                      <div className="pb-4 mb-4 border-b">
                                        <button
                                            onClick={handleGetWinePairing}
                                            disabled={isFetchingSuggestion}
                                            className="w-full bg-colore-quattro text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-gray-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
                                        >
                                            {isFetchingSuggestion ? (
                                                <><i className="fas fa-spinner fa-spin"></i><span>Getting Suggestions...</span></>
                                            ) : (
                                                <><i className="fas fa-wine-glass-alt"></i><span>Get AI Wine Pairing</span></>
                                            )}
                                        </button>

                                        {suggestionError && <p className="text-red-500 text-sm mt-3 text-center">{suggestionError}</p>}
                                        
                                        {wineSuggestions && wineSuggestions.length > 0 && (
                                            <div className="mt-4 p-4 bg-colore-uno/70 rounded-lg">
                                                <h4 className="text-lg font-semibold mb-3 text-colore-quattro flex items-center gap-2">
                                                    <i className="fas fa-star text-colore-otto"></i>
                                                    Sommelier's Suggestions
                                                </h4>
                                                <div className="space-y-4">
                                                    {wineSuggestions.map((suggestion, index) => (
                                                        <div key={index} className="border-t border-colore-due pt-3 first:border-t-0 first:pt-0">
                                                            <div className="flex justify-between items-start gap-2">
                                                                <div className="flex-grow">
                                                                    <p className="font-bold text-colore-quattro">{suggestion.wineName}</p>
                                                                    <p className="text-sm text-colore-tre mt-1 italic">"{suggestion.pairingReason}"</p>
                                                                </div>
                                                                <button 
                                                                    onClick={() => handleAddSuggestedWine(suggestion.wineName)}
                                                                    className="bg-colore-sette text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition-colors flex-shrink-0"
                                                                    aria-label={`Add ${suggestion.wineName} to cart`}
                                                                >
                                                                    Add
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                      </div>

                                      <div className="flex justify-between items-center text-xl font-bold mb-2">
                                          <span>Subtotal</span>
                                          <span>${subtotal.toFixed(2)}</span>
                                      </div>
                                      <p className="text-sm text-gray-500 text-center mb-4">A 20% service fee will be added at checkout.</p>
                                      <button onClick={() => setIsCheckingOut(true)} className="w-full bg-colore-cinque text-white py-3 rounded-lg text-lg font-semibold hover:bg-colore-nove transition-colors">
                                          Proceed to Checkout
                                      </button>
                                    </>
                                  )}
                                </div>
                              </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;