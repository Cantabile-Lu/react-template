import { configureStore } from "@reduxjs/toolkit";
import counter from "@/store/modules/counter.ts";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    counter
  }
});
// 重写Selector
type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 重写dispatch
type RootDispatch = typeof store.dispatch;
export const useAppDispatch: () => RootDispatch = useDispatch;

export const appShallowEqual = shallowEqual;
export default store;
