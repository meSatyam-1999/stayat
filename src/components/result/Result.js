import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result = () => {

  const navigate = useNavigate();
  const seeAvail = () => {
      navigate("/hotels/:id");
  }

  return (
    <div className="listItems flex">
            <div className="firstItem w-52 h-20">
              <img
                className="rounded-sm"
                src="https://cf.bstatic.com/xdata/images/hotel/square600/328780624.webp?k=04a02437d2193e8e2f331fdb265fccf32dec487a8125d95c1674ee1cec136ded&o="
                alt="hotelimg"
              />
            </div>

            <div className="secCon px-5">
              <h1 className="text-3xl font-bold">Hotel Angel</h1>
              <p className="mt-2">500m from center</p>
              <button className="bg-green-700 text-white rounded-sm p-1 cursor-none mt-2">
                Free airport taxi
              </button>
              <p className="font-bold mt-1">
                Studio Apartment with air conditioning
              </p>
              <p className="mt-1">
                Entire studio - 1 bathroom - 32m 1 full bed
              </p>
              <p className="text-green-700 font-bold">Free cancellation</p>
              <p className="text-green-700">
                You can cancel later, so luck this great price today!
              </p>
            </div>

            <div className="thirdCon">
              <div className="topdiv flex gap-2">
                <h1 className="text-lg font-bold">Excellent</h1>
                <button className="bg-[#003B95] text-white px-1 rounded-sm">
                  8.9
                </button>
              </div>
              <h1 className="font-bold text-2xl mt-20">₹56,432</h1>
              <p className="text-gray-500">*includes taxes</p>
              <button onClick={seeAvail} className="bg-[#003B95] text-white px-2 text-sm p-2 mt-2 rounded-md hover:scale-110 transition duration-500">
                See availability
              </button>
            </div>
            </div>
  )
}

export default Result