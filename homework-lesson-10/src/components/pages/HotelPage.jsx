import { useContext } from "react";
import { TripContext } from "@/context/TripContext";
import { TRIP_ACTIONS_TYPES as tripActions } from "@/reducers/tripActions";
import { hotels } from "@/components/data";

import ThemeButton from "@/components/ThemeButton";

function HotelPage() {
  const { state, dispatch } = useContext(TripContext);

  const toggleHotel = (hotel) => {
    const isSelected = state.selectedHotels.some((h) => h.id === hotel.id);
    dispatch({
      type: isSelected ? tripActions.DELETE_HOTEL : tripActions.ADD_HOTEL,
      payload: hotel,
    });
  };

  return (
    <div className="task">
      <h1>Доступні готелі</h1>
      {hotels.map((hotel) => {
        const isSelected = state.selectedHotels.some((h) => h.id === hotel.id);
        return (
          <button key={hotel.id} onClick={() => toggleHotel({ id: hotel.id, hotelNum: hotel.hotelNum })}>
            Готель номер: {hotel.hotelNum} {isSelected ? "❌ " : "✅ "}
          </button>
        );
      })}
      <ThemeButton />
    </div>
  );
}

export default HotelPage;
