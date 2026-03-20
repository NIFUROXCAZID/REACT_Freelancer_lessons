import { createSlice } from "@reduxjs/toolkit";
import initialSpentList from "@/spentList";

const initialState = {
  spentList: initialSpentList,
};

export const spentListSlice = createSlice({
  name: "spentList",
  initialState,
  reducers: {
    addSpent: (state, action) => {
      const { category, amount } = action.payload;
      const item = state.spentList.find((p) => p.category === category);
      if (item) {
        item.totalSpent += Number(amount);
      }
    },

    deleteSpent: (state, action) => {
      const category = action.payload;
      const item = state.spentList.find((p) => p.category === category);
      if (item) {
        item.totalSpent = 0;
      }
    },

    repeatSpent: (state, action) => {
      const category = action.payload;
      const item = state.spentList.find((p) => p.category === category);
      if (item) {
        item.totalSpent *= 2;
      }
    },
  },
});

export const { addSpent, deleteSpent, repeatSpent } = spentListSlice.actions;
export default spentListSlice.reducer;