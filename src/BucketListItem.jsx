import { saveWish } from "./util/localStorageUtil";

export function BucketListItem(props) {
  return (
    <li>
      <label
        class="flex gap-2 items-center"
        className={
          props.item.complete ? "text-gray-400 line-through" : "text-gray-700"
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
    </li>
  );
}
