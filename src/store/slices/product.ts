import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface ProductStateProps {
  product: ProductProps | null;
  productLoading: boolean;
  productLoadError: boolean;
  productUpdating: boolean;
  productUpdateError: boolean;
}

const initialState: ProductStateProps = {
  product: null,
  productLoading: false,
  productLoadError: false,
  productUpdating: false,
  productUpdateError: false,
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
    productIsUpdating: (state) => {
      state.productUpdating = true;
    },
    productUpdateError: (state) => {
      state.productUpdating = false;
      state.productUpdateError = true;
    },
    productUpdateSuccessful: (state, action: PayloadAction<ProductProps>) => {
      state.productUpdating = false;
      state.productUpdateError = false;
      state.product = action.payload;
    },
  },
});

export const {
  productIsLoading,
  productLoadError,
  productLoadSuccessful,
  productIsUpdating,
  productUpdateError,
  productUpdateSuccessful,
} = productSlice.actions;

export default productSlice.reducer;
