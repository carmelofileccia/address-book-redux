import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

export default function FilterList() {
  const dispatch = useDispatch();
  const [filterInput, setFilterInput] = useState("");

  return (
    <div className={styles.FilterList}>
      <input
        value={filterInput}
        onChange={(e) => {
          setFilterInput(e.target.value)
          dispatch({
            type: 'FILTER', payload: {
              key: 'filter',
              value: e.target.value,
            }
          }
          )
        }}
        type="text"
        name="filter"
        id="filter"
        placeholder="Ricerca per nome/cognome ..."
      />

    </div >
  );
}
