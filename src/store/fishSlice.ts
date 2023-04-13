import {produce} from "immer";
import { GetState, SetState } from "zustand";
import { Store } from "./useStore";

export interface FishSlice {
  fishes: number;
  repopulate: () => void;
}

const maxFishes = 10;

const createFishSlice = (set: SetState<Store>, get: GetState<Store>) => ({
  fishes: maxFishes,
  repopulate: () => {
    set(produce((state: Store) => {
        state.fishes = maxFishes;
    }))
  }
});

export default createFishSlice;
