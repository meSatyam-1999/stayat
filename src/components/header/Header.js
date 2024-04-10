import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
      navigate("/hotels", {state: { destination,date,options } });
  }

  const seeRegister = () => {
    navigate("/register");
  }

  const seeHome = () => {
    navigate("/");
  }

  const seeCar = () => {
    navigate("/car");
  }
  const seeFlights = () => {
    navigate("/flights");
  }

  const seeAttraction = () => {
    navigate("/attraction");
  }

  const seeTaxi = () => {
    navigate("/taxi");
  }

  return (
    <div className="header relative bg-[#003B95] text-white flex justify-center">
      <div className="headerContainer w-[100%] max-w-[1024px] mt-[20px] mb-[60px]">
        <div className="headerList flex gap-[40px]">
          <div onClick={seeHome} className="headerListItem flex items-center gap-[10px] border-white border-r-2 p-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div onClick={seeFlights} className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div onClick={seeCar} className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div onClick={seeAttraction} className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div onClick={seeTaxi} className="headerListItem flex items-center gap-[10px] cursor-pointer">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        { type !== "list" &&
          <>
            <h1 className="headerTitle font-extrabold text-5xl mt-11">
              Find your next stay
            </h1>
            <p className="headerDescription text-2xl mt-5">
              Search low prices on hotels, homes and much more...
            </p>
            <button onClick={seeRegister} className="headerBtn transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-2 mt-5 rounded-lg">
              Sign in / Register
            </button>

            <div className="headerSearch w-[1024px] absolute mt-8 h-[70px] bg-white border-[5px] border-yellow-400 flex items-center justify-between">
              <div className="headerSearchItem ml-4 mt-2">
                <FontAwesomeIcon
                  icon={faBed}
                  className="headerIcon bg-black rounded p-2"
                />
                <input
                  className="headerSearchInput text-black p-4 h-6 border-none outline-none"
                  type="text"
                  placeholder="Where are you Going?"
                  onChange={e=>setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerIcon bg-black rounded p-2 "
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText text-black p-4 cursor-pointer"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date absolute top-[50px] z-20"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerIcon bg-black rounded p-2"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText text-black p-4 cursor-pointer"
                >
                  {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options absolute t-[50px] bg-white text-black rounded z-20">
                    <div className="optionItem w-[200px] flex justify-between m-[10px] mt-6">
                      <span className="optionText">Adult</span>
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounter w-[30px] h-[30px] bg-gray-300 font-bold disabled:cursor-not-allowed"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber font-semibold">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounter w-[30px] h-[30px] bg-gray-300 font-bold"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                    <div className="optionItem w-[200px] flex justify-between m-[10px] mt-6">
                      <span className="optionText">Child</span>
                      <button
                        disabled={options.children <= 0}
                        className="optionCounter w-[30px] h-[30px] bg-gray-300 font-bold disabled:cursor-not-allowed"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber font-semibold">
                        {options.children}
                      </span>
                      <button
                        className="optionCounter w-[30px] h-[30px] bg-gray-300 font-bold"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                    <div className="optionItem w-[200px] flex justify-between m-[10px] mt-6 gap-[10px]">
                      <span className="optionText">Room</span>
                      <button
                        disabled={options.room <= 1}
                        className="optionCounter w-[30px] h-[30px] bg-gray-300 font-bold disabled:cursor-not-allowed"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber font-semibold">
                        {options.room}
                      </span>
                      <button
                        className="optionCounter w-[30px] h-[30px] bg-gray-300 font-bold"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem mr-4">
                <button onClick={handleSearch} className="headerBtn bg-[#003B95] text-white w-max font-semibold p-3 hover:scale-110 transition duration-500 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
