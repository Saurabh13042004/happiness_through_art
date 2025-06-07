import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// You would import the Razorpay types if using TypeScript with Razorpay
// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

const CheckoutPage: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Form states
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Karnataka');
  const [pinCode, setPinCode] = useState('');
  const [phone, setPhone] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [sendUpdates, setSendUpdates] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate final amounts
  const subtotal = totalPrice;
  const shipping = 0; // Free shipping or calculate based on address
  const total = subtotal - discount + shipping;

  // Handle discount code application
  const handleApplyDiscount = () => {
    // This is a simple example. In a real app, you would validate the code against your backend
    if (discountCode === 'WELCOME10') {
      const discountAmount = Math.round(subtotal * 0.1); // 10% discount
      setDiscount(discountAmount);
    } else {
      setDiscount(0);
    }
  };

  // Handle Razorpay payment
  const handlePayment = () => {
    setIsProcessing(true);

    // Validate form
    if (!email || !firstName || !lastName || !address || !city || !pinCode || !phone) {
      alert('Please fill all required fields');
      setIsProcessing(false);
      return;
    }

    // In a real application, you would:
    // 1. Send order details to your backend
    // 2. Create a Razorpay order with your backend
    // 3. Get the order ID from Razorpay
    // 4. Initialize the Razorpay checkout
    
    // Mock backend call and Razorpay integration
    setTimeout(() => {
      // This is where you would typically call your backend API
      const orderData = {
        amount: total * 100, // Razorpay expects amount in paise
        currency: 'INR',
        receipt: 'order_' + Date.now(),
        // other order details
      };
      
      // Mock response from backend with Razorpay order ID
      const mockOrderId = 'order_' + Math.random().toString(36).substring(2, 15);
      
      // Initialize Razorpay
      const options = {
        key: 'rzp_test_YOUR_KEY_ID', // Enter your test key here
        amount: total * 100,
        currency: 'INR',
        name: 'Happiness through Art',
        description: 'Purchase of art products',
        order_id: mockOrderId,
        handler: function(response: any) {
          // Handle successful payment
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
          clearCart();
          navigate('/thank-you');
        },
        prefill: {
          name: `${firstName} ${lastName}`,
          email: email,
          contact: phone
        },
        theme: {
          color: '#000000'
        }
      };

      // Open Razorpay checkout
      // In a real implementation, you'd load the Razorpay script and use:
      // const razorpay = new window.Razorpay(options);
      // razorpay.open();
      
      console.log('Would initialize Razorpay with:', options);
      setIsProcessing(false);
      alert('In a real application, Razorpay payment window would open here.');
      
      // For demo purposes, simulate successful payment
      clearCart();
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-10 py-8 mb-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Form */}
        <div className="lg:w-3/5">
          <h1 className="text-3xl font-bold mb-8 text-center lg:text-left">Checkout</h1>
          
          {/* Contact information */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={sendUpdates}
                onChange={() => setSendUpdates(!sendUpdates)}
                className="accent-black"
              />
              Email me with news and offers
            </label>
          </section>

          {/* Delivery */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            
            {/* Country/Region */}
            <div className="mb-4">
              <label className="text-sm text-gray-500 mb-1 block">Country/Region</label>
              <div className="relative">
                <select
                  className="w-full p-3 border border-gray-300 rounded-sm appearance-none focus:outline-none focus:ring-1 focus:ring-black pr-8"
                  defaultValue="India"
                >
                  <option>India</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Name */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>
            </div>
            
            {/* Address */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>
            
            <div className="mb-4">
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            
            {/* City, State, PIN */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>
              <div className="relative">
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-sm appearance-none focus:outline-none focus:ring-1 focus:ring-black pr-8"
                  required
                >
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Delhi">Delhi</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="PIN code"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>
            </div>
            
            {/* Phone */}
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>
            
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={() => setSaveInfo(!saveInfo)}
                className="accent-black"
              />
              Save this information for next time
            </label>
          </section>

          {/* Shipping method */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
            <div className="border border-gray-300 rounded-sm p-4 bg-gray-50">
              <p className="text-center text-gray-500">Enter your shipping address to view available shipping methods</p>
            </div>
          </section>

          {/* Payment */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
            
            <div className="border border-gray-300 rounded-sm mb-4">
              <label className="flex items-center p-4 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="accent-black mr-3"
                />
                <span className="font-medium">Credit card</span>
                <div className="ml-auto flex gap-2">
                  <img src="https://cdn.razorpay.com/static/assets/pay_methods_branding/card/visa.png" alt="Visa" className="h-6" />
                  <img src="https://cdn.razorpay.com/static/assets/pay_methods_branding/card/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="https://cdn.razorpay.com/static/assets/pay_methods_branding/card/amex.png" alt="Amex" className="h-6" />
                </div>
              </label>
              
              {paymentMethod === 'card' && (
                <div className="p-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600 mb-4">
                    Payment will be securely processed by Razorpay when you click "Pay now"
                  </p>
                </div>
              )}
            </div>
            
            <div className="border border-gray-300 rounded-sm">
              <label className="flex items-center p-4 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cashfree"
                  checked={paymentMethod === 'cashfree'}
                  onChange={() => setPaymentMethod('cashfree')}
                  className="accent-black mr-3"
                />
                <span className="font-medium">Cashfree Payments (UPI/Cards/Wallets/NetBanking)</span>
                <img src="https://cdn.razorpay.com/static/assets/pay_methods_branding/upi/upi.png" alt="UPI" className="h-6 ml-auto" />
              </label>
            </div>
          </section>
        </div>

        {/* Right side - Order summary */}
        <div className="lg:w-2/5">
          <div className="bg-gray-50 p-6 border border-gray-200 rounded-sm">
            <h2 className="text-xl font-semibold mb-4">Order summary</h2>
            
            {/* Cart items */}
            <div className="mb-6 max-h-96 overflow-y-auto">
              {cartItems.map((item, index) => (
                <div key={index} className="flex mb-4 pb-4 border-b border-gray-200 last:border-0">
                  <div className="w-16 h-16 bg-gray-100 relative mr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="text-sm text-gray-600">{item.type}</div>
                    <div className="text-sm">
                      <span>{item.size}</span> • 
                      <span className="ml-1" style={{ color: item.color.hex }}>
                        {item.color.name}
                      </span>
                    </div>
                  </div>
                  <div className="font-medium">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Discount code */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Discount code or gift card"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-grow p-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  onClick={handleApplyDiscount}
                  className="bg-gray-100 px-6 border border-gray-300 border-l-0 hover:bg-gray-200"
                >
                  Apply
                </button>
              </div>
            </div>
            
            {/* Subtotal */}
            <div className="mb-4">
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between py-2 text-green-600">
                  <span>Discount</span>
                  <span>- Rs. {discount.toLocaleString()}</span>
                </div>
              )}
              
              <div className="flex justify-between py-2">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `Rs. ${shipping.toLocaleString()}`}</span>
              </div>
            </div>
            
            {/* Total */}
            <div className="flex justify-between py-4 border-t border-gray-200 font-semibold text-lg">
              <span>Total</span>
              <div className="text-right">
                <span className="text-sm text-gray-500 block">INR</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Pay button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing || cartItems.length === 0}
              className={`w-full mt-4 py-4 text-center text-white font-medium ${
                isProcessing || cartItems.length === 0 ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Pay now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;