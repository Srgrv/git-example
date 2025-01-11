"use client";

import { Provider } from "react-redux"; // правильный импорт
import { makeStore } from "../store/index"; // правильный импорт

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={makeStore()}>{children}</Provider>;
};
