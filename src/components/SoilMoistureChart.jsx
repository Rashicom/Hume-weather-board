// SoilMoistureChart.jsx
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SoilMoistureChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
        formatter: "{a} <br/>{b}: {c}%",
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
        name: "(%)",
      },
      series: [
        {
          name: "Surface (0cm)",
          type: "line",
          data: [30, 32, 31, 33, 35, 34, 36],
          smooth: true,
          areaStyle: {
            color: "rgba(0, 188, 212, 0.2)",
          },
          lineStyle: {
            color: "#00bcd4",
          },
          itemStyle: {
            color: "#00bcd4",
          },
        },
        {
          name: "10cm Depth",
          type: "line",
          data: [28, 29, 28, 30, 32, 31, 33],
          smooth: true,
          areaStyle: {
            color: "rgba(103, 58, 183, 0.2)",
          },
          lineStyle: {
            color: "#673ab7",
          },
          itemStyle: {
            color: "#673ab7",
          },
        },
        {
          name: "30cm Depth",
          type: "line",
          data: [25, 26, 26, 27, 28, 27, 29],
          smooth: true,
          areaStyle: {
            color: "rgba(139, 195, 74, 0.2)",
          },
          lineStyle: {
            color: "#8bc34a",
          },
          itemStyle: {
            color: "#8bc34a",
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

export default SoilMoistureChart;
