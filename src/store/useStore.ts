import create from "zustand";

import createBearSlice, { BearSlice } from "./bearSlice";
import createFishSlice, { FishSlice } from "./fishSlice";

export type MyState = BearSlice & FishSlice;

const useStore = create<MyState>((set, get) => ({
  ...createBearSlice(set, get),
  ...createFishSlice(set, get)
}));

export default useStore;
