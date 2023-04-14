import { persist, devtools } from "zustand/middleware";
import {create} from "zustand";

import createBearSlice, { BearState } from "./bearSlice";
import createFishSlice, { FishState } from "./fishSlice";

export type State = BearState & FishState;

const useStore = create<
  State,
  [
    ['zustand/devtools', never],
    ['zustand/persist', State]
  ]
>(
  devtools(persist((...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a)
  }),
  {
    name: "location-storage",
    getStorage: () => sessionStorage
  }))
);


export default useStore;
