import RainfallChart from "./components/RainfallChart";
import TemperatureChart from "./components/TemperatureChart";
import WeatherTable from "./components/WeatherTable";
import LocationSelect from "./components/LocationSelect";
import { useEffect, useRef, useState } from "react";
import { api } from "./utils/apiHandler";
import RainChart from "./components/RainChart";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationOptions, setLocationOptions] = useState([]);
  const [weatherHistory, setWeatherHistory] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [xAxisData, setXAxisData] = useState([]);
  const [tempdata, setTempData] = useState({});
  const [rainfallChartData, setRainfallChartData] = useState([]);

  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const intervalRef = useRef();

  const fetchLocation = async () => {
    try {
      const res = await api.get(`/cluster`);
      if (res.data && res.data.length > 0) {
        const options = res.data.map((loc) => ({
          label: loc.cluster_name,
          value: loc.uuid,
        }));
        setLocationOptions(options);
        setSelectedLocation(options[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMapDetails = async () => {
    try {
      if (selectedLocation) {
        const res = await api.get(
          `/cluster-weather-map/${selectedLocation.value}`
        );
        if (res.data) {
          setMapData(res?.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeatherHistory = async () => {
    try {
      if (selectedLocation) {
        const res = await api.get(
          `/cluster-weather-history/${selectedLocation.value}`
        );
        if (res?.data) {
          const xAxis = res?.data?.data?.map((data) => data.day);
          const minTemp = res?.data?.data?.map((data) => data.avg_temp_min);
          const maxTemp = res?.data?.data?.map((data) => data.avg_temp_max);
          const rain = res?.data?.data?.map((data) => data.avg_rain);
          setTempData({ minTemp, maxTemp });
          setXAxisData(xAxis);
          setWeatherHistory(res.data?.data);
          setRainfallChartData(rain);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    if (locationOptions.length > 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setSelectedLocation((prev) => {
          if (!prev) return locationOptions[0];
          const currentIndex = locationOptions.findIndex(
            (loc) => loc.value === prev.value
          );
          const nextIndex = (currentIndex + 1) % locationOptions.length;
          return locationOptions[nextIndex];
        });
      }, 60000);

      return () => clearInterval(intervalRef.current);
    }
  }, [locationOptions]);

  useEffect(() => {
    fetchMapDetails();
    fetchWeatherHistory();
  }, [selectedLocation]);

  return (
    <section className="md:h-screen w-screen">
      <div className="w-full h-full md:flex">
        <div className="bg-[#5d9ce6] h-full w-full md:w-[26%] p-3 lg:p-4 lg:pe-6 2xl:py-10  text-white flex flex-col ">
          <div className="flex items-center w-full ">
            <LocationSelect
              location={selectedLocation}
              setLocation={setSelectedLocation}
              options={locationOptions}
            />
          </div>
          <div className="mt-2 2xl:text-[20px]">{formattedDate}</div>

          <div className="flex flex-col items-center  justify-center ">
            <span className="font-bold text-9xl 2xl:text-[150px] text-center mt-6">
              27&deg;
            </span>

            {/* <span className="mt-5 flex  items-center gap-5 2xl:text-[20px]">
              <TiWeatherSunny />
              sunny
            </span> */}
          </div>
          <div className="flex-1 overflow-hidden  ">
            <WeatherTable weatherData={weatherHistory} />
          </div>
        </div>
        <div className="flex-1 bg-[#e4f1ff] rounded-2xl md:-ml-3  p-3 flex flex-col h-full">
          <div>
            <h6 className="text-2xl font-bold">Weather Forecast Dashboard</h6>
            <p>Check out today's weather information </p>
          </div>
          <div className="flex-1 md:flex gap-3 ">
            <div className="mt-2 h-[300px] md:h-full w-full md:w-[70%] bg-white rounded-2xl flex flex-col">
              <div className=" px-3 pt-2">
                <h6 className="font-bold">Rain Fall</h6>
              </div>
              <div className="flex-1 p-2">
                <RainfallChart data={mapData} />
              </div>
            </div>
            <div className="flex-1 flex gap-1 pt-3">
              <div className="flex flex-col  flex-1 gap-2 h-[600px] md:h-auto">
                <div className=" flex-1  w-full bg-white  rounded-2xl flex flex-col">
                  <div className=" px-3 py-2">
                    <h6 className="font-bold">Temperature</h6>
                  </div>
                  <div className="flex-1">
                    <TemperatureChart
                      xAxisData={xAxisData}
                      maxTemp={tempdata?.maxTemp}
                      minTemp={tempdata?.minTemp}
                    />
                  </div>
                </div>
                <div className="flex-1  w-full bg-white  rounded-2xl flex flex-col">
                  <div className=" px-3 py-2">
                    <h6 className="font-bold">Soil Temperature</h6>
                  </div>
                  <div className="flex-1">
                    <RainChart
                      xAxisData={xAxisData}
                      yAxisData={rainfallChartData}
                    />
                  </div>
                </div>
                {/* <div className="h-[300px] md:h-auto  w-full bg-white  rounded-2xl flex flex-col">
                  <div className=" px-3 py-2">
                    <h6 className="font-bold">Soil Moisture</h6>
                  </div>
                  <div className="flex-1">
                    <SoilMoistureChart />
                  </div>
                </div> */}
                {/* <div className="h-[300px] md:h-auto  w-full bg-white  rounded-2xl flex flex-col">
                  <div className=" px-3 py-2">
                    <h6 className="font-bold">Feels Like</h6>
                  </div>
                  <div className="flex-1">
                    <TempDetails />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
