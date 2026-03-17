import { TRIP_ACTIONS_TYPES as tripActions } from "@/reducers/tripActions";

// Функція редюсер
export const tripReducer = (state, action) => {
  switch (action.type) {
    case tripActions.ADD_BUS:
      if (state.selectedBuses.some((bus) => bus.id === action.payload.id)) {
        return state; // автобус уже вибраний
      }
      return {
        ...state,
        selectedBuses: [...state.selectedBuses, action.payload],
      };

    case tripActions.DELETE_BUS:
      return {
        ...state,
        selectedBuses: state.selectedBuses.filter((bus) => bus.id !== action.payload.id),
      };

    case tripActions.ADD_HOTEL:
      if (state.selectedHotels.some((hotel) => hotel.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        selectedHotels: [...state.selectedHotels, action.payload],
      };

    case tripActions.DELETE_HOTEL:
      return {
        ...state,
        selectedHotels: state.selectedHotels.filter((hotel) => hotel.id !== action.payload.id),
      };

    default:
      return state;
  }
};
