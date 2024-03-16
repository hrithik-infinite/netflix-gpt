import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMoreInfo } from "../utils/moreInfoSlice";
import { IMAGE_CDN_PATH_ORIGINAL } from "../utils/Constants";
import CloseIcon from "@mui/icons-material/Close";

const MoreInfo = () => {
  const dispatch = useDispatch();
  const moreInfoData = useSelector((store) => store.moreInfo.moreInfoData);
  const handleClose = () => {
    dispatch(toggleMoreInfo());
  };

  return (
    <div className="fixed top-[10%] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg h-[75vh] overflow-hidden w-[70vw]">
      <button onClick={handleClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 bg-black bg-opacity-50 rounded-full p-2">
        <CloseIcon style={{ color: "#fff" }} />
      </button>
      <div className="scrollbar-hidden-moreInfo" style={{ overflowY: "auto", maxHeight: "100%" }}>
        <img src={IMAGE_CDN_PATH_ORIGINAL + moreInfoData?.backdrop_path} alt="Backdrop" className="w-full" />
        <h2 className="text-xl font-semibold mb-4">{moreInfoData?.title}</h2>
      </div>
    </div>
  );
};

export default MoreInfo;
