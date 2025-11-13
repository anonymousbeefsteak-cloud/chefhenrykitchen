import React, { useState, useEffect } from 'react';
import type { CartItem } from '../types';

interface ShoppingCartProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onRemove: (itemId: string) => void;
    onUpdateQuantity: (itemId: string, quantity: number) => void;
    onClearCart: () => void;
}

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhxYZNAvEBHTAW_L5WPTc2TXbDxU6ykg0mfdAoA0foLuksTpBT7nTYlaCO-1JkIEJu4g/exec';

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onClearCart }) => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

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

    const getMinDateTime = () => {
        const now = new Date();
        // Adjust for local timezone offset
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        // Format to "YYYY-MM-DDTHH:mm" which is required by datetime-local input
        return now.toISOString().slice(0, 16);
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
                mode: 'no-cors',
                body: formData,
            });

            setSubmitStatus('success');
            onClearCart();
        } catch (error) {
            console.error('Error submitting order:', error);
            setSubmitStatus('error');
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