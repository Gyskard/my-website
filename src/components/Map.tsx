import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import points from "./points.json"

const defaultPosition: L.LatLngExpression = [45.50556252099984, -73.60305089558513]
const defaultZoom = 3

const iconMap: { [key: string]: string } = {
  "walk": "fa-hiking",
  "photo": "fa-camera",
  "building": "fa-building",
  "urbex": "fa-ghost",
  "art": "fa-paintbrush",
  "station": "fa-train",
  "food": "fa-utensils",
  "lighthouse": "fa-lightbulb",
  "port": "fa-anchor",
  "museum": "fa-building-columns",
  "park": "fa-tree-city",
  "monument": "fa-monument",
  "religion": "fa-cross",
  "national-park": "fa-mountain",
  "water": "fa-water",
  "tunnel": "fa-car-tunnel",
  "airport": "fa-plane-departure",
  "castle": "fa-chess-rock",
  "bridge": "fa-bridge",
  "tower": "fa-gopuram",
  "cave": "fa-icicles",
  "boat": "fa-ship",
  "street": "fa-signs-post",
  "plane": "fa-jet-fighter-up",
  "train": "fa-train",
  "capitol": "fa-landmark-flag",
  "library": "fa-book",
  "text": "fa-comment",
  "sailbot": "fa-sailbot",
  "telepherique": "fa-cable-car",
  "heliport": "fa-helicopter",
  "beach": "fa-umbrella-beach",
  "stairs": "fa-stairs"
}

export default function Map() {
  const mapContainer = useRef(null);

  type Mode = 'location' | 'city'

  const [mode, setMode] = useState<Mode>('location')

  function changeMode (mode: Mode) {
    setMode(mode)
  }

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize the map
    const map = L.map(mapContainer.current).setView(defaultPosition, defaultZoom);

    function getIcon(type: string): L.DivIcon {
      return L.divIcon({
        html: `<div class='marker-pin'></div><i class='fa ${iconMap[type] || "fa-circle"} awesome'>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        className: 'custom-div-icon'
      })
    }

    const marketGroup = []

    for (const point of points) {
      for (const geo of point.geolocalisation) {
        const marker = L.marker([geo.latitude, geo.longitude], { icon: getIcon(point.type)})
        marketGroup.push(marker)
        marker.addTo(map)
      }
    }

    map.fitBounds(new L.featureGroup(marketGroup).getBounds())

    // Add a tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);


    return () => {
      map.remove()
    };
  }, []);

  return (
    <div>
      <div className="join mb-7 flex justify-center items-center gap-x-3">  
        <button className={`btn btn-soft join-item btn-${mode === 'location' ? 'primary' : 'secondary'}`} onClick={() => changeMode('location')}>By location</button>
        <button className={`btn btn-soft join-item btn-${mode === 'city' ? 'primary' : 'secondary'}`} onClick={() => changeMode('city')}>By city</button>
      </div>
      <div className="h-96 w-auto" ref={mapContainer} />
    </div>
  )
}
