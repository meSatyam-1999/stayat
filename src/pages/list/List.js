import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Result from "../../components/result/Result";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { format } from "date-fns";
import MailList from "../../components/mailList/MailList";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer flex justify-center mt-[20px]">
        {/* main full body */}

        <div className="listWrapper w-[1024px] flex gap-[20px]">
        <div>
          <div className="listSearch mb-156 bg-yellow-500 rounded-xl max-h-svh sticky top-[10px]">
            <h1 className="lsTitle text-2xl font-bold text-gray-700 mb-8 m-4">
              Search
            </h1>
            <div className="m-4 mb-5">
              <h3 className="font-bold mb-2">Destination</h3>
              <input
                className="px-5 py-2 rounded-sm"
                type="text"
                placeholder={destination}
              />
            </div>

            <div className="m-4">
              <h3 className="font-bold mb-2">Check-in date</h3>

              <span className="bg-white px-5 py-2 rounded-sm">{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {/* <input className="px-5 py-2 rounded-sm" type="text" /> */}
            </div>

            <div className="options m-6">
              <h3 className="font-bold mb-3">Options</h3>

              <div className="flex mb-4">
                <p>Min price (PER NIGHT)</p>
                <input className="w-[50px] ml-6 rounded-sm" type="number" />
              </div>

              <div className="flex mb-4">
                <p>Max price (PER NIGHT)</p>
                <input className="w-[50px] ml-5 rounded-sm" type="number" />
              </div>

              <div className="flex mb-4">
                <p>Adult</p>
                <input className="w-[50px] ml-36 rounded-sm" type="number" />
              </div>

              <div className="flex mb-4">
                <p>Children</p>
                <input className="w-[50px] ml-32 rounded-sm" type="number" />
              </div>

              <div className="flex mb-4">
                <p>Room</p>
                <input className="w-[50px] ml-36 rounded-sm" type="number" />
              </div>

              <button className="bg-black text-white w-[100%] py-2 p-3 mb-2 rounded-md">
                Search
              </button>
            </div>
          </div>
          </div>

          <div className="listResult flex-1">
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
            <Result />
            <br />
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default List;
