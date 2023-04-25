import {
  productLoadSuccessful,
  productIsLoading,
  productLoadError,
  productIsUpdating,
  productUpdateError,
  productUpdateSuccessful,
} from "../slices/product";
import {
  ProductProps,
  EditOfferDetailsProps,
  ProductVideoProps,
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

export const updateProduct =
  (id: number, data: EditOfferDetailsProps | ProductVideoProps) =>
  async (dispatch: any) => {
    try {
      dispatch(productIsUpdating());
      const productUpdateUrl = `https://api-test.innoloft.com/product/${id}/`;
      const response = await axios.put<ProductProps>(productUpdateUrl, data);
      dispatch(productUpdateSuccessful(response.data));
    } catch {
      dispatch(productUpdateError());
    }
  };
