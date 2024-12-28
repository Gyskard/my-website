import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import points from "./points.json"
import cities from "./cities.json"

const defaultPosition: L.LatLngExpression = [0, 0]
const defaultZoom = 3

interface IconMap {
  [key: string]: {
    icon: string, 
    text: string
  }
}

interface Geolocalisation {
  latitude: number,
  longitude: number,
  isApproximated: boolean
}

interface Point {
  name: string,
  type: string,
  geolocalisation: Array<Geolocalisation>
}

type Filter = 'location' | 'city'
type Trip = 'northeastRoadtrip' | 'california' | 'canada'

const iconMap: IconMap = {
  "walk": {
    "icon": "fa-hiking",
    "text": "Walk, hike"
  },
  "photo": {
    "icon": "fa-camera",
    "text": "Viewpoint, photo spot, belvedere"
  },
  "building": {
    "icon": "fa-building",
    "text": "Building, hall, mall"
  },
  "urbex": {
    "icon": "fa-ghost",
    "text": "Exploration, abandoned place/object"
  },
  "art": {
    "icon": "fa-paintbrush",
    "text": "Works of art"
  },
  "station": {
    "icon": "fa-train",
    "text": "Train station, train"
  },
  "food": {
    "icon": "fa-utensils",
    "text": "Restaurant, bakery, shop"
  },
  "lighthouse": {
    "icon": "fa-lightbulb",
    "text": "Lighthouse"
  },
  "port": {
    "icon": "fa-anchor",
    "text": "Port"
  },
  "museum": {
    "icon": "fa-building-columns",
    "text": "Museum"
  },
  "park": {
    "icon": "fa-tree-city",
    "text": "Park, garden, special area"
  },
  "monument": {
    "icon": "fa-monument",
    "text": "Monument, memoriel"
  },
  "religion": {
    "icon": "fa-cross",
    "text": "Church, cross"
  },
  "national-park": {
    "icon": "fa-mountain",
    "text": "National park, provincial park, state park, park"
  },
  "water": {
    "icon": "fa-water",
    "text": "Falls, lake, pond, river"
  },
  "tunnel": {
    "icon": "fa-car-tunnel",
    "text": "Tunnel, car tunnel, train tunnel"
  },
  "airport": {
    "icon": "fa-plane-departure",
    "text": "Airport, air show"
  },
  "castle": {
    "icon": "fa-chess-rook",
    "text": "Castle"
  },
  "bridge": {
    "icon": "fa-bridge",
    "text": "Bridge"
  },
  "cave": {
    "icon": "fa-icicles",
    "text": "Cave, mine"
  },
  "boat": {
    "icon": "fa-ship",
    "text": "Boat"
  },
  "street": {
    "icon": "fa-signs-post",
    "text": "Street, alley"
  },
  "plane": {
    "icon": "fa-plane",
    "text": "Plane"
  },
  "train": {
    "icon": "fa-train",
    "text": "Train"
  },
  "capitol": {
    "icon": "fa-landmark-flag",
    "text": "Capitol, state capitol"
  },
  "library": {
    "icon": "fa-book",
    "text": "Library"
  },
  "text": {
    "icon": "fa-comment",
    "text": "Sign"
  },
  "sailbot": {
    "icon": "fa-sailbot",
    "text": "Sailtbot"
  },
  "telepherique": {
    "icon": "fa-cable-car",
    "text": "Telepherique"
  },
  "heliport": {
    "icon": "fa-helicopter",
    "text": "Heliport, helicopter"
  },
  "beach": {
    "icon": "fa-umbrella-beach",
    "text": "Beach"
  },
  "stairs": {
    "icon": "fa-stairs",
    "text": "Stairs"
  }
}

export default function Map() {
  const mapContainer = useRef(null);

  const [filter, setFilter] = useState<Filter>('location');
  const [trip, setTrip] = useState<string>('northeastRoadtrip');
  const [numberOfPoints, setNumberOfPoints] = useState<number>(0);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = L.map(mapContainer.current).setView(defaultPosition, defaultZoom);

    function getIcon(type: string): L.DivIcon {
      return L.divIcon({
        html: `<div class='marker-pin'></div><i class='fa ${iconMap?.[type]?.icon || "fa-circle"} awesome'>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        className: 'custom-div-icon'
      })
    }

    function getDescription(point: Point, geo: Geolocalisation): string {
      let description = `<b>${point.name}</b><br>`
      description += `<u>Category</u>: ${iconMap?.[point.type]?.text || "Place, uncategorized"}`
      if (geo.isApproximated) description += `<br /><br/><i>Position purposely approximated</i>`
      return description
    }

    const marketGroup = []

    if (filter === 'location') {
      const tripPoints = points[trip as keyof typeof points] || [];
      for (const point of tripPoints) {
        for (const geo of point.geolocalisation) {
          const marker = L.marker([geo.latitude, geo.longitude], { icon: getIcon(point.type)})
          marker.bindPopup(getDescription(point, geo)).openPopup();
          marketGroup.push(marker)
          marker.addTo(map)
        }
      }
    } else {
      for (const city of cities[trip as keyof typeof points]) {
        const marker = L.marker([city.geolocalisation.latitude, city.geolocalisation.longitude], { icon: getIcon("") })
        marker.bindPopup(`<b>${city.name}</b>`).openPopup();
        marketGroup.push(marker)
        marker.addTo(map)
      }
    }

    if (marketGroup.length > 0) map.fitBounds(new L.featureGroup(marketGroup).getBounds())

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);

    setNumberOfPoints(marketGroup.length)

    return () => {
      map.remove()
    };
  }, [filter, trip]);

  return (
    <div>
      <div className="flex gap-2">
        <select className="select join-item flex-none w-36" 
          name="filter" 
          value={filter}
          onChange={(e) => setFilter(e.target.value as Filter)}
        >

          <option value="location">By location</option>
          <option className={trip === 'canada' ? 'disabled' : ''} value="city">By city</option>
        </select>
        <select 
          className="select join-item grow" 
          name="trip" 
          value={trip}
          onChange={(e) => setTrip(e.target.value as Trip)}
        >
          <option value="northeastRoadtrip">Canada/USA Roadtrip (2024/2025)</option>
          <option value="california">California Travel (2023)</option>
          <option value="canada">Canada Travel (2022)</option>
        </select>
      </div>
      <div className="h-96 w-auto mt-5" ref={mapContainer} />
      { numberOfPoints > 0 &&
        <span className="mt-3 flex justify-center">
          <i> {numberOfPoints} { filter === 'location' ? ' locations' : ' cities'}</i>
        </span>
      }
    </div>
  )
}
