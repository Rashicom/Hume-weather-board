// RainfallChart.jsx
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const RainfallChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

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
        name: "Rainfall (mm)",
        splitLine: {
          show: false,
        },
      },
      grid: {
        left: "10%",
        right: "5%",
        bottom: "15%",
        top: "15%",
      },
      series: [
        {
          name: "Rainfall",
          type: "line",
          data: [10, 22, 28, 43, 49, 62, 70],
          areaStyle: {
            color: "rgba(0, 136, 212, 0.2)",
          },
          itemStyle: {
            color: "#0088d4",
          },
          smooth: true,
        },
      ],
    };

    chartInstance.setOption(option);

    // Resize on window change
    const handleResize = () => chartInstance.resize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default RainfallChart;
