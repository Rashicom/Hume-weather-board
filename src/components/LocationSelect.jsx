import Select from "react-select";
import { IoLocationOutline } from "react-icons/io5";
import { useEffect } from "react";

const options = [
  { value: "alappuzha", label: "Alappuzha", lat: 9.4981, lon: 76.3388 },
  { value: "ernakulam", label: "Ernakulam", lat: 10.0159, lon: 76.3419 },
  { value: "idukki", label: "Idukki", lat: 9.8492, lon: 77.0579 },
  { value: "kannur", label: "Kannur", lat: 11.8745, lon: 75.3704 },
  { value: "kasaragod", label: "Kasaragod", lat: 12.5, lon: 75.0 },
  { value: "kollam", label: "Kollam", lat: 8.8932, lon: 76.6141 },
  { value: "kottayam", label: "Kottayam", lat: 9.5916, lon: 76.5222 },
  { value: "kozhikode", label: "Kozhikode", lat: 11.2588, lon: 75.7804 },
  { value: "malappuram", label: "Malappuram", lat: 11.0409, lon: 76.0822 },
  { value: "palakkad", label: "Palakkad", lat: 10.7867, lon: 76.6548 },
  { value: "pathanamthitta", label: "Pathanamthitta", lat: 9.264, lon: 76.787 },
  {
    value: "thiruvananthapuram",
    label: "Thiruvananthapuram",
    lat: 8.5241,
    lon: 76.9366,
  },
  { value: "thrissur", label: "Thrissur", lat: 10.5276, lon: 76.2144 },
  { value: "wayanad", label: "Wayanad", lat: 11.6854, lon: 76.132 },
];

const customStyles = {
  control: (base) => ({
    ...base,
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    minHeight: "unset",
    height: "auto",
    padding: 0,
    width: "100%",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
    color: "#fff",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 0,
    color: "#fff",
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 10,
    // backgroundColor: "#1f2937",
    width: "100%",
    minWidth: "100%",
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,

    color: isSelected ? "#fff" : isFocused ? "#60a5fa" : "#000",
    cursor: "pointer",
  }),
};

const LocationSelect = ({ location, setLocation }) => {
  useEffect(() => {
    setLocation(options[options?.length - 1]);
  }, []);
  return (
    <div className="flex items-center gap-2 w-full 2xl:text-[20px] ">
      <IoLocationOutline className="text-xl" />
      <div className="flex-1">
        <Select
          options={options}
          styles={customStyles}
          isSearchable={false}
          components={{ IndicatorSeparator: () => null }}
          value={location}
          onChange={(e) => setLocation(e)}
        />
      </div>
    </div>
  );
};

export default LocationSelect;
