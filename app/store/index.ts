import { createStore } from "zustand";
import { BearSlice, createBearSlice } from "./bear-slice";
import { FishSlice, createFishSlice } from "./fish-slice";

export type BoundedStore = BearSlice & FishSlice;

export const createBoundStore = (initState = {}) => {
  return createStore<BoundedStore>()((...a) => ({
    ...initState,
    ...createBearSlice(...a),
    ...createFishSlice(...a),
  }));
};
