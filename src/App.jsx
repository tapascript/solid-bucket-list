import { BucketListItem } from "./BucketListItem";
import { AddToBucket } from "./AddToBucket";
import useBucketList from "./hooks/useBucketList";

function App() {
  const [items, setItems] = useBucketList();


  return (
    <div class="container flex flex-col justify-center items-center gap-4">
      <h1 class="text-4xl font-bold">Solid Bucket List</h1>
      <AddToBucket setItems={setItems} />
      <ul class="text-2xl">
        <For each={items()}>
          {(item) => <BucketListItem item={item} setItems={setItems} />}
        </For>
      </ul>
    </div>
  );
}

export default App;
