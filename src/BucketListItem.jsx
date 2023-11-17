import { Show } from "solid-js";
import { getRelativeTimeDifferenceFromNow } from "./util/dateTimeUtil";
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

        <Show when={!props.item.complete && props.item.deadline}>
          <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
            {getRelativeTimeDifferenceFromNow(new Date(props.item.deadline))}
          </span>
        </Show>
      </label>
    </li>
  );
}
