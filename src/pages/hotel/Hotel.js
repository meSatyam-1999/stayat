import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

const Hotel = () => {
  return (
    <div className="hotelPage">
      <Navbar />
      <Header type="list" />
      <div className="mainCon justify-center flex flex-col m-60 mt-[20px] mb-4">
        <div className="topCon w-[1024px] flex gap-[250px]">
          <div className="firstCon">
            <h1 className="text-3xl font-bold">Hotel Mayfair Lagoon</h1>
            <div className=" locationIcon flex mt-6 gap-4">
              <FontAwesomeIcon icon={faLocationDot} />
              <div className="flex flex-col gap-[10px]">
                <span className="font-semibold">
                  Hi-tech City, Street no.15, Near Uppal
                </span>
                <span className="text-xl text-[#003B95] font-semibold">
                  Excellent Loation - 500m from center
                </span>
                <span className="text-md text-green-700 font-semibold">
                  Book a stay over ₹56,432 at this property and get a free
                  airport taxi
                </span>
              </div>
            </div>
          </div>

          <div className="secCon mt-[20px]">
            <button className="bg-[#003B95] text-white w-max p-4 font-semibold rounded-lg hover:scale-110 transition duration-500">
              Reserve or Book Now!
            </button>
          </div>
        </div>

        <div className="midCon w-[33%] mt-[40px]">
          <div className="hotelImgFirst object-cover flex p-3 gap-3">
            <img className="hover:scale-110 transition duration-500"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/466830133.jpg?k=ee596fd259b9a18971bb94ded94e9c1b45f278a30c5e477f38376597bef23ca7&o=&hp=1"
              alt="image1"
            />
            <img className="hover:scale-110 transition duration-500"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/466830160.jpg?k=633d76048191aaee45e406a1e9deb4dcf55acdf3c71227fc53864a1e65de429a&o=&hp=1"
              alt="image2"
            />
            <img className="hover:scale-110 transition duration-500"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/466830069.jpg?k=4b9fd78fd4f278696d7c0e478879cf0319b9737d34a49d4771f7dc7e688d5fee&o=&hp=1"
              alt="image3"
            />
          </div>
          <div className="hotelImgSec object-cover flex p-3 gap-3">
            <img className="hover:scale-110 transition duration-500"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/466830077.jpg?k=7ed92b02fb7bc616b6c55d312fc56a9d3a2434e6dfa62686e7e401d283996146&o=&hp=1"
              alt="image3"
            />
            <img className="hover:scale-110 transition duration-500"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/466830122.jpg?k=88fc0f2af56b2d0138e8f4d1a699aa96ba68ee6b50b313f0ea5d05b1377e1ee3&o=&hp=1"
              alt="image4"
            />
            <img className="hover:scale-110 transition duration-500"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/466830170.jpg?k=e9d4e01aad7634924818955d066457bd349d1810e5c88d6cc3fcfc01f0addef3&o=&hp=1"
              alt="image5"
            />
          </div>
        </div>

        <div className="bottomCon flex gap-5">
          <div className="leftCon">
            <h1 className="text-3xl font-bold mt-8">
              Stay in the heart of Hyderabad
            </h1>
            <p className="mt-4">
              This spacious and well-appointed home features 4 comfortable and
              stylishly decorated bedrooms, making it the perfect choice for
              families or groups of friends looking for a home-away-from-home
              experience. Each of the 4 bedrooms offers plenty of space and
              natural light, with plush beds and high-quality linens for a
              restful night's sleep. The living area is inviting and cozy, with
              comfortable seating and a large flat-screen TV for your
              entertainment. The fully equipped kitchen offers modern appliances
              and ample counter space, allowing you to easily whip up your
              favorite meals or snacks. The backyard is a private oasis, with
              lush greenery, a beautiful lawn, and comfortable seating for
              lounging and relaxing.
            </p>
          </div>

          <div className="rightCon mt-8 bg-[#003B95] p-8 bg-opacity-15 rounded-lg">
            <h1 className="text-gray-600 font-bold text-lg">Perfect for a 7-night stay!</h1>
            <p className="mt-6">
              Please check what conditions may apply to each
              option when making your selection.
            </p>
            <h1 className="mt-6 text-xl">
              <b>₹56,432</b>(7 nights)
            </h1>
            <button className="bg-[#003B95] text-white w-max p-4 font-semibold rounded-lg mt-5 hover:scale-110 transition duration-500">
              Reserve or Book Now!
            </button>
          </div>
        </div>
        
      </div>
      <MailList />
    <Footer />
    </div>
  );
};

export default Hotel;
