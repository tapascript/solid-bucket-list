import { createSignal } from "solid-js";
import { BucketListItem } from "./BucketListItem";
import { AddToBucket } from "./AddToBucket";
import Modal from './Modal';

import { getWishes, saveWish } from "./util/localStorageUtil";

function App() {
  const [items, setItems] = createSignal(getWishes());
  const [isOpen, setIsOpen] = createSignal(false);

  const handleOneOrMoreDeleteItem = () => {
     setItems((items) => {
        const ItemsWithoutTheDeletedOnes = items.filter(
           (item) => item.delete === false
        );
        saveWish(ItemsWithoutTheDeletedOnes);
        return ItemsWithoutTheDeletedOnes;
     });
  };

  const noOfItemsToBeDeleted = () => {
     const itemsToBeDeleted = items().filter((item) => item.delete);
     return itemsToBeDeleted.length;
  };


  return (
    <div class="container flex flex-col justify-center items-center gap-4">
      <h1 class="text-4xl font-bold">Solid Bucket List</h1>
      <AddToBucket setItems={setItems} />
      <div class="flex justify-center sm:justify-between items-center flex-wrap gap-6">
            <p class="flex justify-center items-center flex-col">
               <span class="font-bold">No of items to be deleted</span>
               <span class="font-bold">{noOfItemsToBeDeleted()}</span>
            </p>
            <button
               type="button"
               class="bg-[crimson] text-white py-2 px-4 rounded-lg font-bold text-center cursor-pointer hover:bg-red-500"
               onclick={() => setIsOpen(true)}
            >
               {noOfItemsToBeDeleted() > 1 ? 'Delete All' : 'Delete'}
            </button>
         </div>

         {isOpen() && (
            <Modal
               title="Delete Confirmation"
               text={
                  noOfItemsToBeDeleted() === 0
                     ? `You haven't selected any item 😕`
                     : `Are you sure? You want to delete ${
                          noOfItemsToBeDeleted() > 1 ? 'those' : 'this'
                       }! 😕`
               }
               setIsOpen={setIsOpen}
               handleOneOrMoreDeleteItem={handleOneOrMoreDeleteItem}
               noOfItemsToBeDeleted={noOfItemsToBeDeleted}
            />
         )}
      <ul class="text-2xl">
        <For each={items()}>
          {(item) => <BucketListItem item={item} setItems={setItems} />}
        </For>
      </ul>
    </div>
  );
}

export default App;
