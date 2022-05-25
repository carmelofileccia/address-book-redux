import { useSelector, useDispatch } from "react-redux";
import AddContact from "./components/AddContact";
import ContactsList from "./components/ContactsList";
import FilterList from "./components/FilterList";
import styles from "./App.module.scss";

function App() {
  // const store = useSelector((state) => state);
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  // const [valueIncrement, setValueIncrement] = useState(0);

  return (
    <div className={styles.App}>
      <AddContact />
      <ContactsList />
      <FilterList />
      <br />
      <br />
      <br />
      {/* <input
        type="number"
        value={valueIncrement}
        onChange={(e) => setValueIncrement(e.target.value)}
      /> */}
      <h1>{value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "INCREMENT10", payload: 10 })}>
        +10
      </button>
      {/* <button
        onClick={() =>
          dispatch({ type: "INCREMENTXN", payload: valueIncrement })
        }
      >
        + {valueIncrement}
      </button> */}
    </div>
  );
}

export default App;
