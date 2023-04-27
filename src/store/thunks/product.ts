import {
  productLoadSuccessful,
  productIsLoading,
  productLoadError,
  productInfoIsUpdating,
  productInfoUpdateError,
  productInfoUpdateSuccessful,
  productOfferDetailsIsUpdating,
  productOfferDetailsUpdateError,
  productOfferDetailsUpdateSuccessful,
  productVideoIsUpdating,
  productVideoUpdateError,
  productVideoUpdateSuccessful,
} from "../slices/product";
import {
  ProductProps,
  EditOfferDetailsProps,
  ProductVideoProps,
  EditProductInfoProps,
} from "../../types";
import axios from "axios";

export const fetchProduct = () => async (dispatch: any) => {
  try {
    dispatch(productIsLoading());
    const productGetUrl = "https://api-test.innoloft.com/product/6781/";
    const response = await axios.get<ProductProps>(productGetUrl);
    dispatch(productLoadSuccessful(response.data));
  } catch {
    dispatch(productLoadError());
  }
};

export const updateProductInfo =
  (id: number, data: EditProductInfoProps) => async (dispatch: any) => {
    try {
      dispatch(productInfoIsUpdating());
      const productUpdateUrl = `https://api-test.innoloft.com/product/${id}/`;
      const response = await axios.put<ProductProps>(productUpdateUrl, data);
      dispatch(productInfoUpdateSuccessful(response.data));
    } catch {
      dispatch(productInfoUpdateError());
    }
  };

export const updateProductVideo =
  (id: number, data: ProductVideoProps) => async (dispatch: any) => {
    try {
      dispatch(productVideoIsUpdating());
      const productUpdateUrl = `https://api-test.innoloft.com/product/${id}/`;
      const response = await axios.put<ProductProps>(productUpdateUrl, data);
      dispatch(productVideoUpdateSuccessful(response.data));
    } catch {
      dispatch(productVideoUpdateError());
    }
  };

export const updateProductOfferDetails =
  (id: number, data: EditOfferDetailsProps) => async (dispatch: any) => {
    try {
      dispatch(productOfferDetailsIsUpdating());
      const productUpdateUrl = `https://api-test.innoloft.com/product/${id}/`;
      const response = await axios.put<ProductProps>(productUpdateUrl, data);
      dispatch(productOfferDetailsUpdateSuccessful(response.data));
    } catch {
      dispatch(productOfferDetailsUpdateError());
    }
  };
