import { useContext } from "react";
import { TripContext } from "@/context/TripContext";
import { TRIP_ACTIONS_TYPES as tripActions } from "@/reducers/tripActions";
import { buses } from "@/components/data";

import ThemeButton from "@/components/ThemeButton";

function BusPage() {
  const { state, dispatch } = useContext(TripContext);

  const toggleBus = (bus) => {
    const isSelected = state.selectedBuses.some((b) => b.id === bus.id);
    dispatch({
      type: isSelected ? tripActions.DELETE_BUS : tripActions.ADD_BUS,
      payload: bus,
    });
  };

  return (
    <div className="task">
      <h1>Доступні автобуси</h1>
      {buses.map((bus) => {
        const isSelected = state.selectedBuses.some((b) => b.id === bus.id);
        return (
          <button key={bus.id} onClick={() => toggleBus({ id: bus.id, busNum: bus.busNum })}>
            Автобус номер: {bus.busNum} {isSelected ? "❌ " : "✅ "}
          </button>
        );
      })}
      <ThemeButton />
    </div>
  );
}

export default BusPage;
