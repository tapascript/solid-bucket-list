import { saveWish } from "./util/localStorageUtil";

export function ClearDoneWishes(props) {
  return (
    <button
      class="px-3 py-1.5 text-xl rounded-md bg-blue-600 text-white capitalize"
      onClick={(e) => {
        e.preventDefault();
        props.setItems((items) => {
          const updatedWishes = items.filter((item) => !item.complete);
          saveWish(updatedWishes);
          return updatedWishes;
        });
      }}
    >
      clear done wishes
    </button>
  );
}
