import { createSignal } from 'solid-js';
import { BucketListItem } from './BucketListItem';
import { AddToBucket } from './AddToBucket';

function App() {
  const [items, setItems] = createSignal([
    { text: 'Walk the dog', complete: false },
    { text: 'Do homework', complete: true },
  ]);

  return (
    <div>
      <ul>
        <For each={items()}>
          {(item) => <BucketListItem item={item} setItems={setItems} />}
        </For>
      </ul>
      <AddToBucket setItems={setItems} />
    </div>
  );
}

export default App;