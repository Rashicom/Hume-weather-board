import React from "react";
import Select from "react-select";
import { IoLocationOutline } from "react-icons/io5";

const options = [
  { value: "alappuzha", label: "Alappuzha" },
  { value: "ernakulam", label: "Ernakulam" },
  { value: "idukki", label: "Idukki" },
  { value: "kannur", label: "Kannur" },
  { value: "kasaragod", label: "Kasaragod" },
  { value: "kollam", label: "Kollam" },
  { value: "kottayam", label: "Kottayam" },
  { value: "kozhikode", label: "Kozhikode" },
  { value: "malappuram", label: "Malappuram" },
  { value: "palakkad", label: "Palakkad" },
  { value: "pathanamthitta", label: "Pathanamthitta" },
  { value: "thiruvananthapuram", label: "Thiruvananthapuram" },
  { value: "thrissur", label: "Thrissur" },
  { value: "wayanad", label: "Wayanad" },
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

const LocationSelect = () => {
  return (
    <div className="flex items-center gap-2 w-full ">
      <IoLocationOutline className="text-xl" />
      <div className="flex-1">
        <Select
          defaultValue={options[0]}
          options={options}
          styles={customStyles}
          isSearchable={false}
          components={{ IndicatorSeparator: () => null }}
        />
      </div>
    </div>
  );
};

export default LocationSelect;
