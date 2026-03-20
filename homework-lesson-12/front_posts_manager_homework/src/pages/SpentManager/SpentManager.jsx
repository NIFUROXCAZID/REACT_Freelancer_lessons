import { useSelector, useDispatch } from "react-redux";
import { addSpent, deleteSpent, repeatSpent } from "@/store/slices/spentManager";
import { useState } from "react";
import styles from "./SpentManager.module.css";

function SpentManager() {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // всі категорії (для select)
  const allSpentList = useSelector((state) => state.spentList.spentList);

  // тільки ті, де є витрати
  const spentList = allSpentList.filter((p) => p.totalSpent !== 0);

  const handleAdd = () => {
    if (!price || !category) return;

    dispatch(
      addSpent({
        category,
        amount: Number(price),
      }),
    );

    setPrice("");
    setCategory("");
  };

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.form_el}>
          <label>Money</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className={styles.form_el}>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category</option>
            {allSpentList.map((item) => (
              <option key={item.id} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className={styles.list}>
        {spentList.map((spent) => (
          <li key={spent.id}>
            <span>{spent.category}</span>
            <span><strong>{spent.totalSpent}</strong></span>
            <button onClick={() => dispatch(deleteSpent(spent.category))}>Delete</button>
            <button onClick={() => dispatch(repeatSpent(spent.category))}>Repeat</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpentManager;
