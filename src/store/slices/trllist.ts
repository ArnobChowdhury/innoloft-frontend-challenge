import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRLProps } from "../../types";

interface TRLListStateProps {
  trlList: TRLProps[] | null;
  trlListLoading: boolean;
  trlListError: boolean;
}

const initialState: TRLListStateProps = {
  trlList: null,
  trlListLoading: false,
  trlListError: false,
};

export const trlListSlice = createSlice({
  name: "trlList",
  initialState,
  reducers: {
    trlListLoading: (state) => {
      state.trlListLoading = true;
    },
    trlListLoadError: (state) => {
      state.trlListLoading = false;
      state.trlListError = true;
    },
    trlListLoadSuccessful: (state, action: PayloadAction<TRLProps[]>) => {
      state.trlListLoading = false;
      state.trlListError = false;
      state.trlList = action.payload;
    },
  },
});

export const { trlListLoading, trlListLoadError, trlListLoadSuccessful } =
  trlListSlice.actions;

export default trlListSlice.reducer;
