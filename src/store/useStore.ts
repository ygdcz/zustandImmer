import { persist, StoreApiWithPersist } from "zustand/middleware";
import create, {GetState, SetState} from "zustand";

import createBearSlice, { BearSlice } from "./bearSlice";
import createFishSlice, { FishSlice } from "./fishSlice";

export type Store = BearSlice & FishSlice;

const useStore = create<Store, SetState<Store>, GetState<Store>, StoreApiWithPersist<Store>>(
  persist(
    (set, get) => ({
      ...createBearSlice(set, get),
      ...createFishSlice(set, get)
    }),
    {
      name: "location-storage",
      getStorage: () => sessionStorage
    }
  )
);


export default useStore;
