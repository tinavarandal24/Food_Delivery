import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
            <div className='
                bg-[url("/src/assets/frontend_assets/hero.jpg")] 
                sm:h-[50vw] md:h-[40vw] lg:h-[35vw] xl:h-[30vw] 
                transition-all
                bg-no-repeat bg-cover w-[75%] h-[35vw] my-[30px] mx-auto text-white relative flex items-center bg-center rounded-2xl
            '>
                <div
                    className={`absolute flex flex-col items-start text-white 
                        top-1/2 left-[5%] sm:left-[8%] md:left-[10%] 
                        transform -translate-y-1/2 
                        max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] 
                        transition-opacity duration-1000 
                        ${isVisible ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    <div className="flex flex-col">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Order Your</h2>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Favourite Food Here</h2>
                    </div>
                    <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl pr-2 sm:pr-4">
                        Explore our delicious range of food and beverages. From fresh starters to mouth-watering main courses and refreshing drinks, our menu has something for everyone. Enjoy the best quality at affordable prices.
                    </p>
                    <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition font-primary text-sm sm:text-base">
                        View Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
