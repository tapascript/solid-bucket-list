import { createSignal } from 'solid-js';
import { BucketListItem } from './BucketListItem';
import { AddToBucket } from './AddToBucket';



const dummy_Data = [
  { text: 'Walk the dog', complete: false },
  { text: 'Do homework', complete: true },
]

/**
 *  return saved wishes data from local-storage.
 *  if no data is saved to localstorage then return dummy data
 */
function getWishesFromLocalStorage(){

  const wishes = JSON.parse(localStorage.getItem("solid-bucket-list"))
    
  if(!wishes) return dummy_Data
    
    return wishes

}

function App() {
  const [items, setItems] = createSignal(getWishesFromLocalStorage());

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