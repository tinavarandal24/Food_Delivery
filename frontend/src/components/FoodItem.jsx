import React, { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../context/storeContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0;

  return (
    <div className="food-item bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        {itemCount === 0 ? (
          <img
            src={assets.add_icon_white}
            alt="Add"
            onClick={() => addToCart(id)}
            className="absolute bottom-3 right-3 w-8 h-8 cursor-pointer"
          />
        ) : (
          <div className="absolute bottom-3 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-2 shadow-md">
            <img
              src={assets.remove_icon_red}
              alt="Remove"
              onClick={() => removeFromCart(id)}
              className="w-5 h-5 cursor-pointer"
            />
            <p className="text-sm font-medium">{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="Add"
              onClick={() => addToCart(id)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="Rating" className="h-5" />
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        <p className="text-red-500 font-bold text-base">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
