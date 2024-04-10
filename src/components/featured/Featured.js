import React from "react";

const Featured = () => {
  return (
      <div className="headerText">
      <h1 className="font-bold text-3xl m-3">Trending Destinations</h1>
      <h2 className="text-xl text-gray-500 text-bold m-8 mt-[2px] ml-2">Most popular choices for travellers from India</h2>
      <div className="featured flex m-2 gap-[10px] overflow-hidden rounded-lg z-0">
        <div className="featuredItem relative overflow-hidden h-[250px] rounded-lg hover:scale-110 transition duration-500 cursor-pointe z-10">
          <img
            className="featuredImg object-cover"
            src="https://cf.bstatic.com/xdata/images/city/354x266/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o="
            alt="featuredImg"
          />
          <div className="featuredTitles absolute bottom-[20px] left-[20px] text-white text-3xl font-bold">
            <h1>Ayodhya</h1>
            <h2>123 Properties</h2>
          </div>
        </div>

        <div className="featuredItem relative overflow-hidden h-[250px] rounded-lg hover:scale-110 transition duration-500 cursor-pointe z-10">
          <img
            className="featuredImg object-cover"
            src="https://cf.bstatic.com/xdata/images/city/354x266/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
            alt="featuredImg"
          />
          <div className="featuredTitles absolute bottom-[20px] left-[20px] text-white text-3xl font-bold">
            <h1>Jaipur</h1>
            <h2>84 Properties</h2>
          </div>
        </div>

        <div className="featuredItem relative overflow-hidden h-[250px] rounded-lg hover:scale-110 transition duration-500 cursor-pointe z-10">
          <img
            className="featuredImg object-cover"
            src="https://cf.bstatic.com/xdata/images/city/354x266/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
            alt="featuredImg"
          />
          <div className="featuredTitles absolute bottom-[20px] left-[20px] text-white text-3xl font-bold">
            <h1>Mumbai</h1>
            <h2>278 Properties</h2>
          </div>
        </div>

        <div className="featuredItem relative overflow-hidden h-[250px] rounded-lg hover:scale-110 transition duration-500 cursor-pointe z-10">
          <img
            className="featuredImg object-cover"
            src="https://cf.bstatic.com/xdata/images/city/354x266/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
            alt="featuredImg"
          />
          <div className="featuredTitles absolute bottom-[20px] left-[20px] text-white text-3xl font-bold">
            <h1>Hyderabad</h1>
            <h2>216 Properties</h2>
          </div>
        </div>
      </div>
      </div>

     
  );
};

export default Featured;
