import useStore from "./store/useStore";
import shallow from 'zustand/shallow'

const App = () => {
  const {fishes, eatFish, repopulate} =  useStore((state) => ({
    fishes: state.fishes,
    eatFish: state.eatFish,
    repopulate: state.repopulate
  }), shallow)

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
