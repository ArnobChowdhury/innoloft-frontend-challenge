import {
  productLoadSuccessful,
  productIsLoading,
  productLoadError,
} from "../slices/product";
import axios from "axios";

export const fetchProduct = () => async (dispatch: any) => {
  try {
    dispatch(productIsLoading());
    const productUrl = "https://api-test.innoloft.com/product/6781/";
    const response = await axios.get(productUrl);
    dispatch(productLoadSuccessful(response.data));
  } catch {
    dispatch(productLoadError());
  }
};
