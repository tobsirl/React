import { configureStore } from "@reduxjs/toolkit";
import searchParams from "./searchParamsSlice";
import adoptedPet from "./adoptedPetSlice";
import { petApi } from "./PetApiService";

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
});

export default store;
