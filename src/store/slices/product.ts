import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface ProductStateProps {
  product: ProductProps | null;
  productLoading: boolean;
  productLoadError: boolean;
}

const initialState: ProductStateProps = {
  product: null,
  productLoading: false,
  productLoadError: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productIsLoading: (state) => {
      state.productLoading = true;
    },
    productLoadError: (state) => {
      state.productLoading = false;
      state.productLoadError = true;
    },
    productLoadSuccessful: (state, action: PayloadAction<ProductProps>) => {
      state.productLoading = false;
      state.productLoadError = false;
      state.product = action.payload;
    },
  },
});

export const { productIsLoading, productLoadError, productLoadSuccessful } =
  productSlice.actions;

export default productSlice.reducer;
