import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface ProductStateProps {
  product: ProductProps | null;
  productLoading: boolean;
  productLoadError: boolean;
  productInfoUpdating: boolean;
  productInfoUpdateError: boolean;
  productVideoUpdating: boolean;
  productVideoUpdateError: boolean;
  productOfferDetailsUpdating: boolean;
  productOfferDetailsUpdateError: boolean;
}

const initialState: ProductStateProps = {
  product: null,
  productLoading: false,
  productLoadError: false,
  productInfoUpdating: false,
  productInfoUpdateError: false,
  productVideoUpdating: false,
  productVideoUpdateError: false,
  productOfferDetailsUpdating: false,
  productOfferDetailsUpdateError: false,
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
    productInfoIsUpdating: (state) => {
      state.productInfoUpdating = true;
    },
    productInfoUpdateError: (state) => {
      state.productInfoUpdating = false;
      state.productInfoUpdateError = true;
    },
    productInfoUpdateSuccessful: (
      state,
      action: PayloadAction<ProductProps>
    ) => {
      state.productInfoUpdating = false;
      state.productInfoUpdateError = false;
      state.product = action.payload;
    },
    productVideoIsUpdating: (state) => {
      state.productVideoUpdating = true;
    },
    productVideoUpdateError: (state) => {
      state.productVideoUpdating = false;
      state.productVideoUpdateError = true;
    },
    productVideoUpdateSuccessful: (
      state,
      action: PayloadAction<ProductProps>
    ) => {
      state.productVideoUpdating = false;
      state.productVideoUpdateError = false;
      state.product = action.payload;
    },
    productOfferDetailsIsUpdating: (state) => {
      state.productOfferDetailsUpdating = true;
    },
    productOfferDetailsUpdateError: (state) => {
      state.productOfferDetailsUpdating = false;
      state.productOfferDetailsUpdateError = true;
    },
    productOfferDetailsUpdateSuccessful: (
      state,
      action: PayloadAction<ProductProps>
    ) => {
      state.productOfferDetailsUpdating = false;
      state.productOfferDetailsUpdateError = false;
      state.product = action.payload;
    },
  },
});

export const {
  productIsLoading,
  productLoadError,
  productLoadSuccessful,
  productInfoIsUpdating,
  productInfoUpdateError,
  productInfoUpdateSuccessful,
  productVideoIsUpdating,
  productVideoUpdateError,
  productVideoUpdateSuccessful,
  productOfferDetailsIsUpdating,
  productOfferDetailsUpdateError,
  productOfferDetailsUpdateSuccessful,
} = productSlice.actions;

export default productSlice.reducer;
