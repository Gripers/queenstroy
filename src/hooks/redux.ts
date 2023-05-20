import { useMemo } from "react";

import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "@/redux/store";
import { actions as favActions } from "@/redux/slices/fav";
import { actions as cartActions } from "@/redux/slices/cart";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const actions = {
    ...favActions,
    ...cartActions,
  };

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
