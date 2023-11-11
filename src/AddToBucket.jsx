import { createSignal } from "solid-js";

export function AddToBucket(props) {
  const [newItem, setNewItem] = createSignal('');

  //  Save new wish to localstorage
  function saveToLocalStorage(prev, newWish){
    const allWishes = [
      ...prev, {
        text: newWish,
        complete:false,
      }
    ].reverse()
    localStorage.setItem("solid-bucket-list", JSON.stringify(allWishes))
  }

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
            saveToLocalStorage(items, newItem());
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