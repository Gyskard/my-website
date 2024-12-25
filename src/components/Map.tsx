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

type Mode = 'location' | 'city'

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
    "icon": "fa-religion",
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

  const [mode, setMode] = useState<Mode>('location')

  function changeMode (mode: Mode) {
    setMode(mode)
  }

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

    if (mode === 'location') {
      for (const point of points) {
        for (const geo of point.geolocalisation) {
          const marker = L.marker([geo.latitude, geo.longitude], { icon: getIcon(point.type)})
          marker.bindPopup(getDescription(point, geo)).openPopup();
          marketGroup.push(marker)
          marker.addTo(map)
        }
      }
    } else {
      for (const city of cities) {
        const marker = L.marker([city.geolocalisation.latitude, city.geolocalisation.longitude], { icon: getIcon("") })
        marker.bindPopup(`<b>${city.name}</b>`).openPopup();
        marketGroup.push(marker)
        marker.addTo(map)
      }
    }

    map.fitBounds(new L.featureGroup(marketGroup).getBounds())


    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap" }).addTo(map);


    return () => {
      map.remove()
    };
  }, [mode]);

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
