import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMoreInfo } from "../utils/moreInfoSlice";
import { IMAGE_CDN_PATH_ORIGINAL } from "../utils/Constants";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MoreInfoMovieDtls from "./MoreInfoMovieDtls";

const MoreInfo = () => {
  const dispatch = useDispatch();
  const moreInfoData = useSelector((store) => store.moreInfo.moreInfoData);
  const handleClose = () => {
    dispatch(toggleMoreInfo());
  };

  return (
    <div
      className="fixed top-[10%] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg h-[100vh] overflow-hidden w-[70vw] scrollbar-hidden-moreInfo"
      style={{ overflowY: "auto", maxHeight: "100%" }}
    >
      <button
        onClick={handleClose}
        className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 bg-black bg-opacity-50 rounded-full p-2"
      >
        <CloseIcon style={{ color: "#fff" }} />
      </button>
      <img
        src={IMAGE_CDN_PATH_ORIGINAL + moreInfoData?.backdrop_path}
        alt="Backdrop"
        className="w-full"
      />
      <div className=" bg-gradient-to-b from-transparent via-black via-10% to-black ">
        <div className="relative w-full  flex items-center justify-start pb-10 -mt-40">
          <button className="absolute bg-white text-black px-6 py-2 rounded-md shadow-lg hover:bg-red-700 transition duration-300 mr-4">
            <PlayArrowIcon style={{ color: "black", marginRight: "4px" }} />{" "}
            Play
          </button>
          <button
            className="absolute bg-white text-black rounded-full p-2"
            style={{ right: "80px" }}
          >
            <AddIcon style={{ color: "#000" }} />
          </button>
          <button
            className="absolute bg-white text-black rounded-full p-2"
            style={{ right: "20px" }}
          >
            <ThumbUpOutlinedIcon style={{ color: "#000" }} />
          </button>
        </div>
        <div className="z-10">
          <MoreInfoMovieDtls />
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
