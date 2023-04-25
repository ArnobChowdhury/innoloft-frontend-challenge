import {
  trlListLoadSuccessful,
  trlListLoading,
  trlListLoadError,
} from "../slices/trllist";
import axios from "axios";
import { TRLProps } from "../../types";

export const fetchTrlList = () => async (dispatch: any) => {
  try {
    dispatch(trlListLoading());
    const trlListUrl = "https://api-test.innoloft.com/trl/";
    const response = await axios.get<TRLProps[]>(trlListUrl);
    dispatch(trlListLoadSuccessful(response.data));
  } catch {
    dispatch(trlListLoadError());
  }
};
