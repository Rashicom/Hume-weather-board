import { IoLocationOutline } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import RainfallChart from "./components/RainfallChart";
import TemperatureChart from "./components/TemperatureChart";
import SoilTemperatureChart from "./components/SoilTemperatureChart";
import SoilMoistureChart from "./components/SoilMoistureChart";
import TempDetails from "./components/TempDetails";
import WeatherTable from "./components/WeatherTable";
import LocationSelect from "./components/LocationSelect";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState();
  return (
    <section className="md:h-screen w-screen">
      <div className="w-full h-full md:flex">
        <div className="bg-[#5d9ce6] h-full w-full md:w-[25%] p-3 lg:p-6 2xl:py-10  text-white flex flex-col ">
          <div className="flex items-center w-full ">
            <LocationSelect location={location} setLocation={setLocation} />
          </div>
          <div className="mt-2 2xl:text-[20px]">Sunday, 18 May</div>

          <div className="flex flex-col items-center  justify-center ">
            <span className="font-bold text-9xl 2xl:text-[150px] text-center mt-6">
              27&deg;
            </span>

            <span className="mt-5 flex  items-center gap-5 2xl:text-[20px]">
              <TiWeatherSunny />
              sunny
            </span>
          </div>
          <div className="flex-1 overflow-hidden  ">
            <WeatherTable />
          </div>
        </div>
        <div className="flex-1 bg-[#e4f1ff] rounded-2xl md:-ml-3  p-3 flex flex-col h-full">
          <div>
            <h6 className="text-2xl font-bold">Weather Forecast Dashboard</h6>
            <p>Check out today's weather information </p>
          </div>
          <div className="mt-3 h-[300px] md:h-[40%] bg-white rounded-2xl flex flex-col">
            <div className=" p-3">
              <h6 className="font-bold">Rain Fall</h6>
            </div>
            <div className="flex-1">
              <RainfallChart location={location} />
            </div>
          </div>
          <div className="flex-1 flex gap-1 pt-3">
            <div className="grid grid-cols-1 md:grid-cols-4 flex-1 gap-2">
              <div className=" h-[300px] md:h-auto  w-full bg-white  rounded-2xl flex flex-col">
                <div className=" p-3">
                  <h6 className="font-bold">Temperature</h6>
                </div>
                <div className="flex-1">
                  <TemperatureChart />
                </div>
              </div>
              <div className="h-[300px] md:h-auto  w-full bg-white  rounded-2xl flex flex-col">
                <div className=" p-3">
                  <h6 className="font-bold">Soil Temperature</h6>
                </div>
                <div className="flex-1">
                  <SoilTemperatureChart />
                </div>
              </div>
              <div className="h-[300px] md:h-auto  w-full bg-white  rounded-2xl flex flex-col">
                <div className=" p-3">
                  <h6 className="font-bold">Soil Moisture</h6>
                </div>
                <div className="flex-1">
                  <SoilMoistureChart />
                </div>
              </div>
              <div className="h-[300px] md:h-auto  w-full bg-white  rounded-2xl flex flex-col">
                <div className=" p-3">
                  <h6 className="font-bold">Feels Like</h6>
                </div>
                <div className="flex-1">
                  <TempDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
