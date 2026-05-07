import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useTranslation } from 'react-i18next'

import kfcMapIcon from "@/assets/img/icons/kfc-map-icon.svg";

export default function RestaurantsLocationsMap({styles}) {
  const { t } = useTranslation()

  const kfcLocations = [
    { name: "KFC Павлоград", description: "м. Павлоград, вул. Шевченка, 67", lat: 48.533, lng: 35.870 },
    { name: "KFC Кременчук", description: "м. Кременчук, вул. Соборності, ТРЦ", lat: 49.067, lng: 33.416 },
    { name: "KFC Полтава", description: "м. Полтава, просп. Свободи, 19", lat: 49.588, lng: 34.551 },
    { name: "KFC Київ (Позняки)", description: "м. Київ, просп. Миколи Бажана, 16Д", lat: 50.395, lng: 30.616 },
    { name: "KFC Київ (Печерськ)", description: "м. Київ, бульвар Лесі Українки, 26", lat: 50.426, lng: 30.538 },
    { name: "KFC Київ (Блокбастер)", description: "м. Київ, просп. Степана Бандери, 36", lat: 50.486, lng: 30.498 },
    { name: "KFC Київ (Smart Plaza)", description: "м. Київ, просп. Перемоги, 24", lat: 50.450, lng: 30.454 },
    { name: "KFC Дніпро (Вокзал)", description: "м. Дніпро, площа Вокзальна, 13", lat: 48.467, lng: 35.046 },
    { name: "KFC Дніпро (Глінки)", description: "м. Дніпро, вул. Глінки, 19", lat: 48.464, lng: 35.050 },
    { name: "KFC Харків", description: "м. Харків, центр міста", lat: 49.993, lng: 36.230 },
    { name: "KFC Одеса (Дерибасівська)", description: "м. Одеса, вул. Дерибасівська, 16", lat: 46.485, lng: 30.741 },
    { name: "KFC Одеса (Рівʼєра)", description: "м. Одеса, Південна дорога, 101а", lat: 46.556, lng: 30.793 },
    { name: "KFC Львів (Victoria Gardens)", description: "м. Львів, вул. Кульпарківська, 226а", lat: 49.811, lng: 23.977 },
    { name: "KFC Львів (центр)", description: "м. Львів, центр міста", lat: 49.839, lng: 24.029 },
    { name: "KFC Вінниця", description: "м. Вінниця, центр міста", lat: 49.233, lng: 28.468 },
    { name: "KFC Кривий Ріг", description: "м. Кривий Ріг, ТРЦ", lat: 47.910, lng: 33.391 },
    { name: "KFC Суми", description: "м. Суми, центр міста", lat: 50.907, lng: 34.798 },
    { name: "KFC Івано-Франківськ", description: "м. Івано-Франківськ, ТРЦ", lat: 48.922, lng: 24.711 },
    { name: "KFC Чернівці", description: "м. Чернівці, центр міста", lat: 48.291, lng: 25.940 },
    { name: "KFC Ужгород", description: "м. Ужгород, центр міста", lat: 48.620, lng: 22.287 },
    { name: "KFC Кременчук", description: "Соборна вулиця, 16/9, Кременчук, Полтавська область, 39600", lat: 49.067, lng: 33.416 },
  ];
  const kfcIcon = new L.Icon({
    iconUrl: kfcMapIcon,
    iconSize: [36, 36],
  });

  return (
    <div className={styles.kfcMap}>
      <MapContainer center={[49.067, 33.416]} zoom={10} style={{ height: "500px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {kfcLocations.map((place, i) => (
          <Marker key={i} position={[place.lat, place.lng]} icon={kfcIcon}>
            <Popup>
              <div className={styles.kfcMap__popup}>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}