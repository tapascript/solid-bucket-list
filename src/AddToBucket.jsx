import { createSignal } from "solid-js";

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
        onClick={(e) => {
          e.preventDefault();
          props.setItems((items) => {
            return [...items, { text: newItem(), complete: false }].reverse();
          });
          setNewItem('');
        }}
      >
        Add
      </button>
    </form>
  );
}