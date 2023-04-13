import produce from "immer";
import { GetState, SetState } from "zustand";
import { Store } from "./useStore";

export interface BearSlice {
  eatFish: () => void;
}

const createBearSlice = (set: SetState<Store>, get: GetState<Store>) => ({
  eatFish: () => {
    set(produce((state: Store) => {
        state.fishes > 0 ? state.fishes-- : 0;
    }));
  }
});

export default createBearSlice;
