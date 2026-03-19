import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import initialProducts from "@/products";

const initialState = {
  products: initialProducts.map((p) => ({ ...p, id: uuidv4() })),
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        id: uuidv4(),
        name: action.payload.name,
        price: action.payload.price,
      });
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
