import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "@/redux/slices/listFilter/productsManager";
import { useState } from "react";

function ListFilter() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");

  const products = useSelector((state) => {
    const all = state.products.products;
    if (!search) return all;
    return all.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  });
  return (
    <div>
      <h2>Список з фільтрацією (Завдання 1)</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <button onClick={() => dispatch(addProduct({ name, price }))}>Add Product</button>
      <hr />
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}$ <span onClick={() => dispatch(deleteProduct(p.id))}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListFilter;
