export default function PackingList({ items, handleDeleteItem, handleUpdateItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} handleUpdateItem={handleUpdateItem} />
          ))}
        </ul>
      </div>
    );
  }
  function Item({ item, handleDeleteItem, handleUpdateItem }) {
    return (
      <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleUpdateItem(item.id)}
        />
        {item.quantity} x {item.description}
        <button onClick={() => handleDeleteItem(item.id)}>🗑️</button>
      </li>
    );
  }