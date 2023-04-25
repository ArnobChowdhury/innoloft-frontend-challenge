import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import trllistReducer from "./slices/trllist";

const store = configureStore({
  reducer: {
    product: productReducer,
    trllist: trllistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
