import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-8 md:px-16 lg:px-24">
      <form className="flex flex-col md:flex-row gap-8 justify-between">
        {/* Left Side - Delivery Info */}
        <div className="flex-1 space-y-4 bg-gray-50 p-6 rounded-xl shadow">
          <p className="text-xl font-bold text-gray-800">Delivery Information</p>

          <div className="flex gap-4">
            <input type="text" placeholder="First Name"
              className="w-1/2 px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
            />
            <input type="text" placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
            />
          </div>

          <input type="email" placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
          />

          <input type="text" placeholder="Street"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
          />

          <div className="flex gap-4">
            <input type="text" placeholder="City"
              className="w-1/2 px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
            />
            <input type="text" placeholder="State"
              className="w-1/2 px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
            />
          </div>

          <div className="flex gap-4">
            <input type="text" placeholder="Pin code"
              className="w-1/2 px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
            />
            <input type="text" placeholder="Country"
              className="w-1/2 px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
            />
          </div>

          <input type="text" placeholder="Phone"
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 ring-red-400"
          />
        </div>

        {/* Right Side - Cart Summary */}
        <div className="w-full md:w-[400px]">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Totals</h2>
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

            <button
              type="button"
              className="mt-6 w-full bg-red-400 text-white py-2 rounded hover:bg-red-800 transition duration-200"
            >
              PROCEED TO PAYMENT

            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
