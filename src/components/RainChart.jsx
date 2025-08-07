// SoilTemperatureChart.jsx
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const RainChart = ({ xAxisData, yAxisData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        top: 30,
        data: ["Surface (0cm)", "10cm Depth", "30cm Depth"],
        show: false,
      },
      grid: {
        left: "15%",
        right: "5%",
        bottom: "10%",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
      },
      yAxis: {
        type: "value",
        name: "(°C)",
      },
      series: [
        {
          name: "Rain fall",
          type: "line",
          data: yAxisData,
          smooth: true,
          areaStyle: {
            color: "rgba(255, 153, 0, 0.2)",
          },
          lineStyle: {
            color: "#ff9900",
          },
          itemStyle: {
            color: "#ff9900",
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
  }, [xAxisData, yAxisData]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default RainChart;
