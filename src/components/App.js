import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";

function App() {
  const [items, setItems] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("input");

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <div>
        <button onClick={() => setSortCriteria("input")}>Sort by Input Order</button>
        <button onClick={() => setSortCriteria("description")}>Sort by Description</button>
        <button onClick={() => setSortCriteria("packed")}>Sort by Packed Status</button>
        <button onClick={handleClearItems}>Clear All</button>
      </div>
      <PackingList items={items} sortCriteria={sortCriteria} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} />
      <Stats items={items} />
    </div>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const packedPercentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything!"
          : `You have ${totalItems} items in the list. You already packed ${packedItems} (${packedPercentage}%).`}
      </em>
    </footer>
  );
}

export { App, Logo, Form, PackingList, Stats };
export default App;