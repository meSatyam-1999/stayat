import React from "react";

const PropertyList = () => {
  return (
    <div className="propertyList flex gap-[20px] justify-between m-5">
      <div className="propertyListItem overflow-hidden cursor-pointer rounded-lg w-72">
        <img
          className="propImg w-[100%] h-[150px] object-cover"
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt="hotels"
        />
        <div className="propertyListTitle p-5">
          <h1 className="font-bold text-xl">Hotels</h1>
          <h2 className="text-lg text-gray-500">549 hotels</h2>
        </div>
      </div>

      <div className="propertyListItem overflow-hidden cursor-pointer rounded-lg w-72">
        <img
          className="propImg w-[100%] h-[150px] object-cover"
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
          alt="apartments"
        />
        <div className="propertyListTitle p-5">
          <h1 className="font-bold text-xl">Apartments</h1>
          <h2 className="text-lg text-gray-500">380 apartments</h2>
        </div>
      </div>

      <div className="propertyListItem overflow-hidden cursor-pointer rounded-lg w-72">
        <img
          className="propImg w-[100%] h-[150px] object-cover"
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt="resorts"
        />
        <div className="propertyListTitle p-5">
          <h1 className="font-bold text-xl">Resorts</h1>
          <h2 className="text-lg text-gray-500">615 resorts</h2>
        </div>
      </div>

      <div className="propertyListItem overflow-hidden cursor-pointer rounded-lg w-72">
        <img
          className="propImg w-[100%] h-[150px] object-cover"
          src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt="villas"
        />
        <div className="propertyListTitle p-5">
          <h1 className="font-bold text-xl">Villas</h1>
          <h2 className="text-lg text-gray-500">469 villas</h2>
        </div>
      </div>

      <div className="propertyListItem overflow-hidden cursor-pointer rounded-lg w-72">
        <img
          className="propImg w-[100%] h-[150px] object-cover"
          src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o="
          alt="cabins"
        />
        <div className="propertyListTitle p-5">
          <h1 className="font-bold text-xl">Cabins</h1>
          <h2 className="text-lg text-gray-500">843 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
