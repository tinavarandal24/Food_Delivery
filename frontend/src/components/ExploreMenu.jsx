import React from 'react';
import { assets, menu_list } from '../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div  className='explore-menu px-10 py-6' id='explore-menu'>

            {/* Top Section - Heading and Text */}
            <div className='text-center mb-6'>
                <h1 className='text-5xl font-bold mb-4'>Explore our menu</h1>
                <p className="font-primary text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Discover our tasty menu featuring fresh starters, delicious main courses, and refreshing drinks. Perfectly crafted for every food lover.
                </p>
            </div>

            {/* Bottom Section - Menu List */}
            <div className='explore-menu-list flex flex-wrap justify-center py-8 gap-6 cursor-pointer'>
                {menu_list.map((item, index) => (
                    <div
                        key={index}
                        className='explore-menu-list-item w-36 text-center transition-all duration-300 hover:scale-105'
                        onClick={() =>
                            setCategory(category === item.menu_name ? "All" : item.menu_name)
                        }
                    >
                        <div className={`p-2 rounded-lg ${category === item.menu_name ? 'bg-red-100' : 'bg-white'}`}>
                            <img
                                src={item.menu_image}
                                alt={item.menu_name}
                                className='w-full h-auto rounded-lg'
                            />
                        </div>
                        <p className={`py-2 mt-2 text-sm font-medium ${category === item.menu_name ? 'text-red-500 font-semibold' : 'text-gray-500'}`}>
                            {item.menu_name}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default ExploreMenu;
