import { createSignal } from 'solid-js';
import { BucketListItem } from './BucketListItem';
import { AddToBucket } from './AddToBucket';

function App() {
  const [items, setItems] = createSignal([
    { text: 'Walk the dog', complete: false },
    { text: 'Do homework', complete: true },
  ]);

  return (
    <div class="container">
      <h1>Solid Bucket List</h1>
      <AddToBucket setItems={setItems} />
      <ul class="list">
        <For each={items()}>
          {(item) => <BucketListItem item={item} setItems={setItems} />}
        </For>
      </ul>
      
    </div>
  );
}

export default App;