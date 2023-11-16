import { createSignal } from 'solid-js';
import { BucketListItem } from './BucketListItem';
import { AddToBucket } from './AddToBucket';
import Modal from './Modal';

function App() {
   const [items, setItems] = createSignal([
      { text: 'Walk the dog', complete: false, delete: false },
      { text: 'Do homework', complete: true, delete: false },
   ]);

   const [isOpen, setIsOpen] = createSignal(false);

   const handleOneOrMoreDeleteItem = () => {
      console.log(`working`);
      setItems((items) => {
         const ItemsWithoutTheDeletedOnes = items.filter(
            (item) => item.delete === false
         );
         console.log(ItemsWithoutTheDeletedOnes);
         return ItemsWithoutTheDeletedOnes;
      });
   };

   const noOfItemToBeDeleted = () => {
      const itemsToBeDeleted = items().filter((item) => item.delete);
      return itemsToBeDeleted.length;
   };

   return (
      <div class="container">
         <h1>Solid Bucket List</h1>
         <AddToBucket setItems={setItems} />
         <div class="delete-items-wrapper">
            <p class="delete-item-count">
               <span class="item-text">No of items to be deleted</span>
               <span class="item-count-number">{noOfItemToBeDeleted()}</span>
            </p>
            <button
               type="button"
               class="btn-delete"
               onclick={() => setIsOpen(true)}
            >
               {noOfItemToBeDeleted() > 1 ? 'Delete All' : 'Delete'}
            </button>
         </div>

         {isOpen() && (
            <Modal
               title="Delete Confirmation"
               text={
                  noOfItemToBeDeleted() === 0
                     ? `You haven't selected any item 😕`
                     : `Are you sure? You want to delete ${
                          noOfItemToBeDeleted() > 1 ? 'those' : 'this'
                       }! 😕`
               }
               setIsOpen={setIsOpen}
               handleOneOrMoreDeleteItem={handleOneOrMoreDeleteItem}
               noOfItemToBeDeleted={noOfItemToBeDeleted}
            />
         )}
         <ul class="list">
            <For each={items()}>
               {(item) => <BucketListItem item={item} setItems={setItems} />}
            </For>
         </ul>
      </div>
   );
}

export default App;
