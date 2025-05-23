import { IoLocationOutline } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import RainfallChart from "./components/RainfallChart";
import TemperatureChart from "./components/TemperatureChart";
import SoilTemperatureChart from "./components/SoilTemperatureChart";
import SoilMoistureChart from "./components/SoilMoistureChart";
import TempDetails from "./components/TempDetails";
import WeatherTable from "./components/WeatherTable";

function App() {
  return (
    <section className="h-screen w-screen p-3">
      <div className="w-full h-full flex">
        <div className="bg-[#5d9ce6] h-full w-1/4 rounded-tl-2xl rounded-bl-2xl p-6 text-white flex flex-col ">
          <div className="flex items-center">
            <IoLocationOutline />
            <span className="font-bold">Wayanad,India</span>
          </div>
          <div>Sunday, 18 May</div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-9xl text-center mt6">27&deg;</span>

            <span className="mt-5 flex  items-center gap-5">
              <TiWeatherSunny />
              sunny
            </span>
          </div>
          <div>
            <WeatherTable />
          </div>
        </div>
        <div className="flex-1 bg-[#e4f1ff] rounded-2xl -ml-3  p-3 flex flex-col h-full">
          <div>
            <h6 className="text-2xl font-bold">Weather Forecast Dashboard</h6>
            <p>Check out today's weather information </p>
          </div>
          <div className="mt-3 h-[40%] bg-white rounded-2xl flex flex-col">
            <div className=" p-3">
              <h6 className="font-bold">Rain Fall</h6>
            </div>
            <div className="flex-1">
              <RainfallChart />
            </div>
          </div>
          <div className="flex-1 flex gap-1 pt-3">
            <div className="grid grid-cols-4 flex-1 gap-2">
              <div className=" w-full bg-white  rounded-2xl flex flex-col">
                <div className=" p-3">
                  <h6 className="font-bold">Temperature</h6>
                </div>
                <div className="flex-1">
                  <TemperatureChart />
                </div>
              </div>
              <div className=" w-full bg-white  rounded-2xl flex flex-col">
                <div className=" p-3">
                  <h6 className="font-bold">Soil Temperature</h6>
                </div>
                <div className="flex-1">
                  <SoilTemperatureChart />
                </div>
              </div>
              <div className=" w-full bg-white  rounded-2xl flex flex-col">
                <div className=" p-3">
                  <h6 className="font-bold">Soil Moisture</h6>
                </div>
                <div className="flex-1">
                  <SoilMoistureChart />
                </div>
              </div>
              <div className=" w-full bg-white  rounded-2xl flex flex-col">
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
