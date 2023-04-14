import useStore, {State} from "./store/useStore";

const App = () => {
  const {fishes, eatFish, repopulate} =  useStore((state: State) => ({
    fishes: state.fishes,
    eatFish: state.eatFish,
    repopulate: state.repopulate
  }))

  return (
    <div className="Mountain">
      <p>Fishes : {fishes}</p>
      <p>
        <button onClick={eatFish}>Eat</button>
      </p>
      <p>
        <button onClick={repopulate}>Repopulate</button>
      </p>
    </div>
  );
}


export default App;
