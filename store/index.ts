import { configureStore } from "@reduxjs/toolkit";

// slices
import projectsSlice from "./projectsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      projects: projectsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
