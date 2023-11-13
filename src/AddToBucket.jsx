import { createSignal } from "solid-js";

import { saveWish } from "./util/localStorageUtil";

export function AddToBucket(props) {
  const [newItem, setNewItem] = createSignal('');

  return (
    <form>
      <input
        type="text"
        placeholder="Make a wish"
        value={newItem()}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button
        type="submit"
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