import { createSignal } from "solid-js";

import { saveWish } from "./util/localStorageUtil";

export function AddToBucket(props) {
  const [newItem, setNewItem] = createSignal('');

  return (
    <form class="flex items-center gap-2">
      <input
        type="text"
        class="w-60 border px-2 py-1.5 rounded-md text-xl"
        placeholder="Make a wish"
        value={newItem()}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button
        type="submit"
        class="px-3 py-1.5 text-xl rounded-md bg-blue-600 text-white"
        disabled={newItem().length < 2}
        onClick={(e) => {
          e.preventDefault();
          props.setItems((items) => {
            const allWishes = [
              {
                id: crypto.randomUUID(),
                text: newItem(),
                complete: false,
              },
              ...items,
            ];
            saveWish(allWishes);
            return allWishes;
          });
          setNewItem('');
        }}
      >
        Add
      </button>
    </form>
  );
}