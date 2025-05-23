// TemperatureChart.jsx
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const TemperatureChart = () => {
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
        name: "°C",
      },
      grid: {
        left: "15%",
        right:"10%",
        bottom:"10%",
      },
      series: [
        {
          name: "Temperature",
          type: "line",
          smooth: true,
          data: [22, 24, 19, 23, 25, 27, 26],
          lineStyle: {
            color: "#ff5722",
          },
          itemStyle: {
            color: "#ff5722",
          },
          areaStyle: {
            color: "rgba(255, 87, 34, 0.2)",
          },
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
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default TemperatureChart;
