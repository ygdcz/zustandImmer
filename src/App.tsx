import useStore from "./store/useStore";

const App = () => {
  const fishes = useStore((state) => state.fishes);
  const eatFish = useStore((state) => state.eatFish);
  const repopulate = useStore((state) => state.repopulate);

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
