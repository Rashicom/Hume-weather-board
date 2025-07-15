import  { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const RainfallChart = ({ location }) => {
  const chartRef = useRef(null);
  const rootRef = useRef(null);
  const pointSeriesRef = useRef(null);

  useEffect(() => {
    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada),
    });

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeriesRef.current = pointSeries;

    pointSeries.bullets.push(() =>
      am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 6,
          fill: am5.color(0xff0000),
          tooltipText: "{title}",
        }),
      })
    );

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    if (location && pointSeriesRef.current && rootRef.current) {
      const { lat, lon, label } = location;

      pointSeriesRef.current.data.setAll([
        {
          geometry: {
            type: "Point",
            coordinates: [lon, lat],
          },
          title: label,
        },
      ]);

      const chart = rootRef.current.container.children.getIndex(0);
      chart.zoomToGeoPoint({ longitude: lon, latitude: lat }, 50, true);
    }
  }, [location]);

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default RainfallChart;
