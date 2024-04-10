import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import Explore from "../../components/explore/Explore";
import Hotelcard from "../../components/hotelcard/Hotelcard";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px]">
        <Featured />
      </div>
      <h1 className="homeTitle font-bold text-2xl m-2 p-4 px-8">
        Browse by property type
      </h1>
      <PropertyList />
      <h1 className="homeTitle font-bold text-2xl m-2 p-1 px-8">
        Explore India
      </h1>
      <h2 className="text-xl text-gray-500 text-bold ml-9 mb-3">
        These popular destinations have a lot to offer
      </h2>
      <Explore />
      <h1 className="homeTitle font-bold text-2xl m-2 p-1 px-8">
      Homes guests love
      </h1>
      <h2 className="text-xl text-gray-500 text-bold ml-9 mb-3">
      From castles and villas to boats and igloos, we've got it all
      </h2>
      <Hotelcard />
      <MailList />
      <Footer />
    </div>
  );
};

export default Home;
