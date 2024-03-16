import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMoreInfo } from "../utils/moreInfoSlice";

const MoreInfo = () => {
  const dispatch = useDispatch();
  const { moreInfoData } = useSelector((store) => store.moreInfo);

  const handleClose = () => {
    dispatch(toggleMoreInfo());
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
      <button onClick={handleClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">
        Close
      </button>
      <h2 className="text-xl font-semibold mb-4">{moreInfoData?.title}</h2>
      <p>{moreInfoData?.description}</p>
    </div>
  );
};

export default MoreInfo;
