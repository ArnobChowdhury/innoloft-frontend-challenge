import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import trllistReducer from "./slices/trllist";
import appConfigReducer from "./slices/appConfig";

const store = configureStore({
  reducer: {
    product: productReducer,
    trllist: trllistReducer,
    appConfig: appConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
