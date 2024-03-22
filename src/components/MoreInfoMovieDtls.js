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
        <div className="h-[400px] w-full bg-black grid grid-cols-12">
          <div className="col-span-9 text-white">
            <div>{returnYear(moreInfoData.release_date)}</div>
            <div>{convertMinutesToHoursAndMinutes(moreInfoData.runtime)}</div>
            <div>{moreInfoData.overview}</div>
          </div>
          <div className="col-span-3 text-white float-right">
            <div>Genre:</div>
            {moreInfoData.genres.map((val) => (
              <div key={val.id}>{val.name}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MoreInfoMovieDtls;
