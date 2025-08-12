import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  if (!food_list || food_list.length === 0) {
    return <div className="text-center mt-10 text-gray-500">Loading food items...</div>;
  }

  const filteredList =
    category === 'All'
      ? food_list
      : food_list.filter(
          (item) => item.category?.toLowerCase() === category.toLowerCase()
        );food_list

  return (
    <div className="food-display mt-2 px-4 md:px-16" id="food-display">
      <h2 className="font-bold text-2xl mb-8 text-center">Top dishes near you</h2>

      {filteredList.length === 0 ? (
        <p className="text-center text-gray-500">No food items found for this category.</p>
      ) : (
        <div className="food-display-list grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredList.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
