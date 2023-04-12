import create from "zustand";
import produce from "immer";

type State = {
  deep: {
    nested: {
      obj: { count: number };
      arr: string[];
    };
  };
  immerInc: () => void;
  immerSetText: (s: string, i: number) => void;
};

const useStore = create<State>((set) => ({
  deep: {
    nested: {
      obj: { count: 0 },
      arr: ["hello"]
    }
  },
  immerInc: () =>
    set(
      produce((state: State) => {
        ++state.deep.nested.obj.count;
      })
    ),
  immerSetText: (s: string, i: number) =>
    set(
      produce((state: State) => {
        state.deep.nested.arr[i] = s;
      })
    ),
}));

const baseState = [
  {
      title: "Learn TypeScript",
      done: true
  },
  {
      title: "Try Immer",
      done: false
  }
]
const newState = produce(baseState, draft => {
  draft[0].done = false;
});
console.log(Object.is(baseState, newState), baseState, newState)

const App = () => {
  const state = useStore();
  return (
    <div>
      <h3>Immer</h3>
      <div>
        {state.deep.nested.obj.count}
        <button onClick={state.immerInc}>+1</button>
        <input
          value={state.deep.nested.arr[0]}
          onChange={(e) => state.immerSetText(e.target.value, 0)}
        />
      </div>
    </div>
  );
};

export default App;
