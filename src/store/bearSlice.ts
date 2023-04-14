import produce from "immer";
import {StateCreator} from "zustand";
import {State} from "./useStore";

export interface BearState {
    eatFish: () => void;
}

const useBearStore: StateCreator<
    State,
    [],
    [],
    BearState
> = (set) => ({
    eatFish: () => {
        set(produce((state: State) => {
            state.fishes > 0 ? state.fishes-- : 0;
        }));
    }
});

export default useBearStore;
