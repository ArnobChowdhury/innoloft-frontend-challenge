import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppConfigProps {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

const initialState: AppConfigProps = {
  id: 1,
  logo: "",
  mainColor: "",
  hasUserSection: false,
};

export const appConfigurationSlice = createSlice({
  name: "appConfiguration",
  initialState,
  reducers: {
    appConfigSuccessful: (state, action: PayloadAction<AppConfigProps>) => {
      state.id = action.payload.id;
      state.logo = action.payload.logo;
      state.mainColor = action.payload.mainColor;
      state.hasUserSection = action.payload.hasUserSection;
    },
  },
});

export const { appConfigSuccessful } = appConfigurationSlice.actions;

export default appConfigurationSlice.reducer;
