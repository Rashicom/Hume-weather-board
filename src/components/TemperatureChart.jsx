// TemperatureChart.jsx
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const TemperatureChart = ({ xAxisData, minTemp, maxTemp }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
      },
      yAxis: {
        type: "value",
        name: "°C",
      },
      grid: {
        left: "15%",
        right: "10%",
        bottom: "10%",
      },
      series: [
        {
          name: "Min Temperature",
          type: "line",
          smooth: true,
          data: minTemp,
          lineStyle: { color: "#ff5722" },
          itemStyle: { color: "#ff5722" },
          areaStyle: { color: "rgba(255, 87, 34, 0.2)" },
        },
        {
          name: "Max Temperature",
          type: "line",
          smooth: true,
          data: maxTemp,
          lineStyle: { color: "#2196f3" },
          itemStyle: { color: "#2196f3" },
          areaStyle: { color: "rgba(33, 150, 243, 0.2)" },
        },
      ],
    };

    chart.setOption(option);

    const resizeHandler = () => chart.resize();
    window.addEventListener("resize", resizeHandler);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", resizeHandler);
    };
  }, [xAxisData, minTemp, maxTemp]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default TemperatureChart;
