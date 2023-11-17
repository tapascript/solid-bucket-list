import { saveWish } from './util/localStorageUtil';

export function BucketListItem(props) {
   const handleButtonClick = () => {
      props.setItems((items) => {
         const newItems = items.map((item) =>
            props.item === item ? { ...item, delete: !item.delete } : item
         );
         saveWish(newItems);
         return newItems;
      });
   };

   return (
      <>
         <li class="flex justify-between items-center gap-x-10">
            <label
               class="flex gap-2 items-center"
               className={
                  props.item.complete
                     ? 'text-gray-400 line-through'
                     : 'text-gray-700'
               }
            >
               <input
                  type="checkbox"
                  class="w-5 h-5"
                  checked={props.item.complete}
                  onChange={() => {
                     props.setItems((items) => {
                        const newItems = items.map((item) =>
                           props.item === item
                              ? { ...item, complete: !item.complete }
                              : item
                        );
                        saveWish(newItems);
                        return newItems;
                     });
                  }}
               />
               {props.item.text}
            </label>
            <button
               class="inline-flex items-center justify-center p-2 text-red-500 hover:bg-red-100 focus:outline-none focus:bg-red-100 focus:text-red-700 transition duration-300 ease-in-out"
               onClick={handleButtonClick}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={props.item.delete ? 'crimson' : 'none'}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke={props.item.delete ? '#c0c0c0' : 'currentcolor'}
                  class="w-6 h-6"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
               </svg>
            </button>
         </li>
      </>
   );
}
