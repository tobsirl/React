import { configureStore } from "@reduxjs/toolkit";
import searchParams from "./searchParamsSlice";
import adoptedPet from "./adoptedPetSlice";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
  },
});

export default store;
