import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import points from "@/data/points.json";
import cities from "@/data/cities.json";
import icons from "@/data/icons.json";
import "leaflet/dist/leaflet.css";
import "@/styles/map.css";
import Script from "next/script";

type Filter = "location" | "city";

export default function Map() {
  const mapContainer = useRef(null);

  const [filter, setFilter] = useState<Filter>("location");
  const [trip, setTrip] = useState<string>("northeastRoadtrip");
  const [numberOfPoints, setNumberOfPoints] = useState<number>(0);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = L.map(mapContainer.current);

    function getIcon(type: string): L.DivIcon {
      return L.divIcon({
        html: `<div class='marker-pin' aria-label="${type}"></div><i class='fa ${icons?.[type as keyof typeof icons]?.icon || "fa-circle"} awesome'>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        className: "custom-div-icon",
      });
    }

    const marketGroup = [];

    if (filter === "location") {
      const tripPoints = points[trip as keyof typeof points] || [];
      for (const point of tripPoints) {
        for (const geo of point.geolocalisation) {
          const marker = L.marker([geo.latitude, geo.longitude], {
            icon: getIcon(point.type),
            alt: point.name,
          });
          let description = `<b>${point.name}</b><br><u>Category</u>: ${icons[point.type as keyof typeof icons]?.text || "Place, uncategorized"}`;
          if (geo.isApproximated)
            description += `<br /><br/><i>Position purposely approximated</i>`;
          marker.bindPopup(description).openPopup();
          marketGroup.push(marker);
          marker.addTo(map);
        }
      }
    } else {
      for (const city of cities[trip as keyof typeof points]) {
        const marker = L.marker(
          [city.geolocalisation.latitude, city.geolocalisation.longitude],
          { icon: getIcon(""), alt: city.name },
        );
        marker.bindPopup(`<b>${city.name}</b>`).openPopup();
        marketGroup.push(marker);
        marker.addTo(map);
      }
    }

    if (marketGroup.length > 0)
      map.fitBounds(L.featureGroup(marketGroup).getBounds());

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
      detectRetina: true,
    }).addTo(map);

    setNumberOfPoints(marketGroup.length);

    return () => {
      map.remove();
    };
  }, [filter, trip]);

  return (
    <>
      <div className="flex gap-2 mt-7">
        <select
          className="select select-floating join-item flex-none w-36"
          name="filter"
          aria-label="Select by location or city"
          value={filter}
          onChange={(e) => setFilter(e.target.value as Filter)}
        >
          <option value="location">By location</option>
          <option className={trip === "canada" ? "disabled" : ""} value="city">
            By city
          </option>
        </select>
        <select
          className="select select-floating join-item grow truncate pr-5"
          name="trip"
          aria-label="Select by a trip"
          value={trip}
          onChange={(e) => setTrip(e.target.value)}
        >
          <option value="northeastRoadtrip">
            Canada/USA Roadtrip (2024/2025)
          </option>
          <option value="california">California Travel (2023)</option>
          <option value="canada">Canada Travel (2022)</option>
        </select>
      </div>
      <div className="h-96 w-auto mt-5" ref={mapContainer} />
      {numberOfPoints > 0 && (
        <span className="mt-3 flex justify-center">
          <i>
            {" "}
            {numberOfPoints} {filter === "location" ? " locations" : " cities"}{" "}
            displayed
          </i>
        </span>
      )}
      <Script
        src="https://kit.fontawesome.com/85e1ea9dc5.js"
        crossOrigin="anonymous"
      />
    </>
  );
}
