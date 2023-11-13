import { saveWish } from "./util/localStorageUtil";

export function BucketListItem(props) {
  return (
    <li
      class="list-item"
      style={{
        "text-decoration": props.item.complete ? "line-through" : undefined,
      }}
    >
      <label>
        <input
          type="checkbox"
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
