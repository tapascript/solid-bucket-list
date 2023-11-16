import { createSignal } from "solid-js";

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
            return [...items, { text: newItem(), complete: false, delete: false }].reverse();
          });
          setNewItem('');
        }}
      >
        Add
      </button>
    </form>
  );
}