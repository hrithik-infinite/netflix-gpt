import React from "react";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import { useSelector } from "react-redux";

const MoreInfoMovieDtls = () => {
  useGetMovieDetails();
  const moreInfoData = useSelector((store) => store.moreInfo.completeData);
  const returnYear = (date) => {
    const _date = new Date(date);
    return _date.getFullYear();
  };
  const convertMinutesToHoursAndMinutes = (minutes) => {
    if (isNaN(minutes) || minutes < 0) {
      return "Invalid input";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes} m`;
    } else if (remainingMinutes === 0) {
      return `${hours} h`;
    } else {
      return `${hours} h ${remainingMinutes} m`;
    }
  };
  return (
    <>
      {moreInfoData && (
        <div className="h-[400px] w-full bg-gradient-to-b from-transparent via-gray-900 via-30% to-gray-900">
          <div>{returnYear(moreInfoData.release_date)}</div>
          <div>{convertMinutesToHoursAndMinutes(moreInfoData.runtime)}</div>
          <div>{moreInfoData.overview}</div>
        </div>
      )}
    </>
  );
};

export default MoreInfoMovieDtls;
