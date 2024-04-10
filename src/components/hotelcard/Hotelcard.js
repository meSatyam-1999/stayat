import React from "react";
import { useNavigate } from "react-router-dom";

const Hotelcard = () => {
  const navigate = useNavigate();

  const openCard = () => {
    navigate("/hotels/:id");
  }
  return (
    <div onClick={openCard} className="hotelsItemList flex justify-between m-9 gap-[16px]">
      <div className="hotelItem rounded-lg overflow-hidden hover:scale-110 transition duration-500 cursor-pointer">
        <img
          className=""
          src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o="
          alt="clubimg"
        />
        <div className="flex flex-col p-3 mt-3 gap-2">
          <span className="text-xl font-bold">Hotel Paradise</span>
          <span className="text-lg font-semibold text-gray-600">Hyderbad</span>
          <span>Starting From <b>₹24,329</b></span>
          </div>
          <div className="rating flex justify-between p-2 gap-2">
            <button className="px-1">8.9★★★★★</button>
            <span>Excellent</span>
          </div>
        
      </div>

      <div className="hotelItem rounded-lg overflow-hidden hover:scale-110 transition duration-500 cursor-pointer">
        <img
          className=""
          src="https://cf.bstatic.com/xdata/images/hotel/square600/97644401.webp?k=22466a369409724fbe8048f538bc8f218f123494d43ebd449cb848b9b895a2cb&o="
          alt="clubimg"
        />
        <div className="flex flex-col p-3 mt-3 gap-2">
        <span className="text-xl font-bold">Moustache Goa Luxuria</span>
        <span className="text-lg font-semibold text-gray-600">Goa</span>
        <span>Starting From <b>₹32,211</b></span>
        </div>
        <div className="rating flex justify-between p-2 gap-2">
          <button className="px-1">8.2★★★★☆</button>
          <span>Better</span>
        </div>
        
      </div>

      <div className="hotelItem rounded-lg overflow-hidden hover:scale-110 transition duration-500 cursor-pointer">
        <img
          className=""
          src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o="
          alt="clubimg"
        />
        <div className="flex flex-col p-3 mt-3 gap-2">
        <span className="text-xl font-bold">Hotel Swadist</span>
        <span className="text-lg font-semibold text-gray-600">Banglore</span>
        <span>Starting From <b>₹16,445</b></span>
        </div>
        <div className="rating flex justify-between p-2 gap-2">
          <button className="px-1">7.5★★★☆☆</button>
          <span>Good</span>
        </div>
        
      </div>

      <div className="hotelItem rounded-lg overflow-hidden hover:scale-110 transition duration-500 cursor-pointer">
        <img
          className=""
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
          alt="clubimg"
        />
        <div className="flex flex-col p-3 mt-3 gap-2">
        <span className="text-xl font-bold">Mayfair Lagoon</span>
        <span className="text-lg font-semibold text-gray-600">Odisha</span>
        <span>Starting From <b>₹52,139</b></span>
        </div>
        <div className="rating flex justify-between p-2 gap-2">
          <button className="px-1">7.9★★★★☆</button>
          <span>Very Good</span>
        </div>
        
      </div>
    </div>
  );
};

export default Hotelcard;
