// SoilTemperatureChart.jsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const SoilTemperatureChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
    
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        top: 30,
        data: ['Surface (0cm)', '10cm Depth', '30cm Depth'],
        show:false,
      },
       grid: {
        left: "15%",
        right:"5%",
        bottom:"10%",
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
        name: '(°C)',
      },
      series: [
        {
          name: 'Surface (0cm)',
          type: 'line',
          data: [22, 24, 23, 21, 25, 27, 26],
          smooth: true,
          areaStyle: {
            color: 'rgba(255, 153, 0, 0.2)',
          },
          lineStyle: {
            color: '#ff9900',
          },
          itemStyle: {
            color: '#ff9900',
          },
        },
        {
          name: '10cm Depth',
          type: 'line',
          data: [20, 21, 21, 20, 22, 23, 22],
          smooth: true,
          areaStyle: {
            color: 'rgba(0, 128, 255, 0.2)',
          },
          lineStyle: {
            color: '#0080ff',
          },
          itemStyle: {
            color: '#0080ff',
          },
        },
        {
          name: '30cm Depth',
          type: 'line',
          data: [18, 19, 18, 18, 19, 20, 19],
          smooth: true,
          areaStyle: {
            color: 'rgba(76, 175, 80, 0.2)',
          },
          lineStyle: {
            color: '#4caf50',
          },
          itemStyle: {
            color: '#4caf50',
          },
        },
      ],
    };

    chart.setOption(option);

    const resizeHandler = () => chart.resize();
    window.addEventListener('resize', resizeHandler);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default SoilTemperatureChart;
