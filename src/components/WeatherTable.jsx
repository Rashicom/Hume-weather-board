import { useState, useEffect } from "react";
import { getNext7Days } from "../utils/weatherUtils";

const WeatherTable = ({ weatherData }) => {
  if (!weatherData?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-3 h-full flex flex-col justify-end overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">കഴിഞ്ഞ 7 ദിവസത്തെ കാലാവസ്ഥ</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto ">
          <thead className="text-left bg-white text-black 2xl:text-[22px]">
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-200">തീയതി</th>
              {/* <th className="px-4 py-2 border-b-2 border-gray-200">
                Condition
              </th> */}
              <th className="px-4 py-2 border-b-2 border-gray-200">
                താപനില
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-200">മഴ</th>
            </tr>
          </thead>
          <tbody className="text-black text-[14px] 2xl:text-[20px]">
            {weatherData?.map((day, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 border-b border-gray-200 text-nowrap">
                  {day?.day}
                </td>

                <td className="px-4 py-2 border-b border-gray-200 text-center">
                  {day?.avg_temp_max}°C
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-center">
                  {day?.avg_rain}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherTable;
