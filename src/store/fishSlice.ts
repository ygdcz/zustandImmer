import {produce} from "immer";
import {StateCreator} from "zustand";
import {State} from "./useStore";

export interface FishState {
  fishes: number;
  repopulate: () => void;
}

const maxFishes = 10;

const useFishStore: StateCreator<
    State,
    [],
    [],
    FishState
> = (set) => ({
    fishes: maxFishes,
    repopulate: () => {
      set(produce((state: State) => {
          state.fishes = maxFishes;
      }))
    }
})

export default useFishStore;
