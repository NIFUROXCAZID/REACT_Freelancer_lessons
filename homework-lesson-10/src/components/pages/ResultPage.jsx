import { useContext } from "react";
import { TripContext } from "@/context/TripContext";
import { TRIP_ACTIONS_TYPES as tripActions } from "@/reducers/tripActions";

import ThemeButton from "@/components/ThemeButton";

function ResultPage() {
  const { state, dispatch } = useContext(TripContext);
  return (
    <div className="task">
      <h1>Сторінка Результату</h1>
      <h2>Автобуси</h2>
      {state.selectedBuses.map((bus) => (
        <div key={bus.id}>
          <button onClick={() => dispatch({ type: tripActions.DELETE_BUS, payload: bus })}>
            Видалити автобус: {bus.busNum} ❌
          </button>
        </div>
      ))}

      <h2>Готелі</h2>
      {state.selectedHotels.map((hotel) => (
        <div key={hotel.id}>
          <button onClick={() => dispatch({ type: tripActions.DELETE_HOTEL, payload: hotel })}>
            Видалити готель: {hotel.hotelNum} ❌
          </button>
        </div>
      ))}
      <ThemeButton />
    </div>
  );
}

export default ResultPage;
