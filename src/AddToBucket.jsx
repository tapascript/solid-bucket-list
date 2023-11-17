import { createSignal } from "solid-js";

import { isFutureDate } from "./util/dateTimeUtil";
import { saveWish } from "./util/localStorageUtil";

export function AddToBucket(props) {
  const [newItem, setNewItem] = createSignal({
    text: "",
    deadline: null,
  });

  const handleWishDeadlineChange = (e) => {
    const deadlineTime = e.target.value;

    if (!isFutureDate(new Date(deadlineTime))) {
      alert("You must pick a deadline time in the future.");
      return;
    }
    setNewItem({ ...newItem(), deadline: deadlineTime });
  };

  const handleWishTextChange = (e) => {
    setNewItem({ ...newItem(), text: e.target.value });
  };

  const isValidWish = (wish) => {
    if (!wish.deadline) return false;
    return true;
  };
  const handleWishCreate = (e) => {
    e.preventDefault();

    const newWish = newItem();

    if (!isValidWish(newWish)) {
      return alert("Please Enter valid wish deadline");
    }

    props.setItems((items) => {
      const allWishes = [
        {
          id: crypto.randomUUID(),
          text: newWish.text,
          complete: false,
          createdAt: new Date(),
          deadline: newWish.deadline,
        },
        ...items,
      ];
      saveWish(allWishes);
      return allWishes;
    });
    setNewItem("");
  };
  return (
    <form class="flex items-center gap-2">
      <input
        type="text"
        class="w-60 border px-2 py-1.5 rounded-md text-xl"
        placeholder="Make a wish"
        value={newItem().text}
        onChange={handleWishTextChange}
      />
      <input
        class="w-40 border px-2 py-1.5 rounded-md text-xl"
        type="dateTime-local"
        name="deadline"
        onchange={handleWishDeadlineChange}
      />
      <button
        type="submit"
        class="px-3 py-1.5 text-xl rounded-md bg-blue-600 text-white"
        onClick={handleWishCreate}
      >
        Add
      </button>
    </form>
  );
}
