import React from "react";

// Generate next 7 days with dates
const getNext7Days = () => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return {
      date: date.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
      temp: Math.floor(25 + Math.random() * 6), // Random temp 25–30
      condition: ["Sunny", "Partly Cloudy", "Rainy", "Cloudy", "Thunderstorms"][
        i % 5
      ],
      humidity: Math.floor(40 + Math.random() * 40), // 40–80%
    };
  });
};

const WeatherTable = () => {
  const weatherData = getNext7Days();

  return (
    <div className="mt-3 h-full flex flex-col justify-end ">
      <h2>7-Day Weather Forecast</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }} className="mt-3">
        <thead className="text-left bg-white text-black">
          <tr>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Temperature (°C)</th>
            <th style={thStyle}>humidity </th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((day, index) => (
            <tr key={index} style={{ textAlign: "left" }}>
              <td style={tdStyle}>{day.date}</td>
              <td style={tdStyle}>{day.temp}&deg;</td>
              <td style={tdStyle}>{day.humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "4px",
  borderBottom: "2px solid #ddd",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "4px",
};

export default WeatherTable;
