import React from "react";
import { facebook, instagram2, pinterest, twitter } from "../../assets";


const Footer = () => {
  return (
    <div className="footerContainer h-auto">
      <div className="footerUp flex justify-between text-[#003B95] m-4">
        <div className="firstCol p-12 cursor-pointer">
        <h1 className="text-2xl font-bold text-black mb-4">Partners</h1>
          <ul>
            <li>Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
          </ul>
        </div>

        <div className="secCol p-12 cursor-pointer">
        <h1 className="text-2xl font-bold text-black mb-4">Properties</h1>
          <ul>
            <li>Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>Guest houses</li>
          </ul>
        </div>

        <div className="thirdCol p-12 cursor-pointer">
        <h1 className="text-2xl font-bold text-black mb-4">Features</h1>
          <ul>
            <li>Unique places to stay</li>
            <li>All destinations</li>
            <li>All flight destinations</li>
            <li>All car hire locations</li>
            <li>Discover</li>
            <li>Reviews</li>
            <li>Discover monthly stays</li>
            <li>Unpacked: Travel articles</li>
            <li>Seasonal and holiday deals</li>
            <li>Traveller Review Awards</li>
          </ul>
        </div>

        <div className="fourthCol p-12 cursor-pointer">
        <h1 className="text-2xl font-bold text-black mb-4">Our partners</h1>
          <ul>
            <li>Car hire</li>
            <li>Flight finder</li>
            <li>Restaurant reservations</li>
            <li>Booking.com for Travel Agents</li>
            <li>Hostels Bookins</li>
            <li>Guest houses Night Stay</li>
          </ul>
        </div>

        <div className="fifthCol p-12 cursor-pointer">
        <h1 className="text-2xl font-bold text-black mb-4">About us</h1>
          <ul>
            <li>Coronavirus (COVID-19) FAQs</li>
            <li>About stayat.com</li>
            <li>Customer Service help</li>
            <li>Partner help</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Press centre</li>
            <li>Safety resource centre</li>
            <li>Terms & Conditions</li>
            <li>Content guidelines and reporting</li>
          </ul>
        </div>
      </div>

      <div className="footerMid p-8 m-6">
        <h1 className="text-2xl font-bold text-black">Social Links</h1>
        <div className="socialIcons flex gap-5 mt-4 w-9">
          <img className="hover:scale-125 transition duration-500 cursor-pointer" src={instagram2} alt="instagram" />
          <img className="hover:scale-125 transition duration-500 cursor-pointer rounded-md" src={twitter} alt="twitter" />
          <img className="hover:scale-125 transition duration-500 cursor-pointer" src={facebook} alt="facebook" />
          <img className="hover:scale-125 transition duration-500 cursor-pointer" src={pinterest} alt="pinterest" />
        </div>
      </div>

      <div className="footerDown text-white p-10  bg-black">
        <span className="m-5">
          Copyright © 2023 - 2024 StayAT®. All rights reserved to @Mr. Satyam
          Singh.
        </span>
      </div>
    </div>
  );
};

export default Footer;
