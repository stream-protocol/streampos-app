import { useState } from 'react';

function Inventory() {
  const [items, setItems] = useState([]); // Example state for inventory items

  // Fetch inventory items (you can replace this with an actual API call)
  const fetchInventoryItems = async () => {
    // Example data
    const exampleData = [
      { id: 1, name: 'Item 1', price: 100 },
      { id: 2, name: 'Item 2', price: 150 },
      // ... add more items
    ];
    setItems(exampleData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Inventory</h1>
      <button onClick={fetchInventoryItems} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Load Inventory Items
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
