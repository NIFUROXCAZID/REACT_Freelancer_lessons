import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "../services/DbOperations";

export const db = new DbOperations("dreams");

export const api = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["DreamItem", "DreamItemsList"],
  endpoints: () => ({}),
});
