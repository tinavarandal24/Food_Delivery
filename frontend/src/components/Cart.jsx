import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  // ✅ filter food items using correct key
  const cartItemsToShow = food_list.filter((item) => cartItems[item._id] > 0);
  const total = getTotalCartAmount() + 2;

  return (
    <div className="cart px-6 py-10 max-w-5xl mx-auto font-primary">
      <div className="cart-items">
        <div className="cart-item-title grid grid-cols-6 gap-4 font-semibold text-gray-600 border-b pb-2 mb-4">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {cartItemsToShow.length === 0 ? (
          <p className="text-center text-gray-400 py-10">Your cart is empty.</p>
        ) : (
          cartItemsToShow.map((item) => (

            <div key={item._id} className="cart-item-content grid grid-cols-6 gap-4 items-center border-b py-3">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{item.price * cartItems[item._id]}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-600 text-xl font-bold hover:scale-110 transition"
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>


      <div className="cart-bottom flex flex-col md:flex-row gap-8 mt-10">-
        
        {/* Cart Totals Section */}
        <div className="cart-total w-full md:w-1/2 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="space-y-4">
            <div className="cart-total-details flex justify-between border-b pb-2 text-gray-700">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details flex justify-between border-b pb-2 text-gray-700">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="cart-total-details flex justify-between font-bold text-lg">
              <b>Total</b>
              <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}
            className="mt-6 w-full bg-red-400 text-white py-2 rounded hover:bg-red-900 transition duration-200">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="cart-promocode w-full md:w-1/2 bg-gray-50 p-6 rounded-xl shadow">
          <p className="mb-4 text-gray-700 font-medium">If you have a promo code, enter it here</p>
          <div className="cart-promocode-input flex gap-2">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-900 transition duration-200">
              Submit
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
