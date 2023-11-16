import { saveWish } from "./util/localStorageUtil";
import { createSignal } from "solid-js";

export function BucketListItem(props) {
  const [isEditable, setIsEditable] = createSignal(false);
  const [editableText, setEditableText] = createSignal("");

  // save editable bucket text
  const bucketTextEdit = () => {
    if (editableText() === "") {
      alert(`You can't submit empty value`);
    } else {
      props.setItems((items) => {
        const newItems = items.map((item) =>
          props.item === item ? { ...item, text: editableText() } : item
        );
        saveWish(newItems);
        return newItems;
      });
    }
  };

  // Handle is editable
  const handleIsEditable = () => {
    setIsEditable(!isEditable());
    setEditableText(props.item.text);
  };

  return (
    <li className="flex justify-between gap-4">
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

        {/* Item text */}
        {/* If editable is enabled, input will be visible. Else render bucket text */}
        {isEditable() ? (
          <input
            type="text"
            value={editableText()}
            className="w-60 border px-2 py-1 rounded-md text-xl"
            onChange={(e) => {
              setEditableText(e.target.value);
            }}
          />
        ) : (
          props.item.text
        )}
      </label>

      {/* Editable bucket text save and cancel button */}
      {isEditable() && (
        <div className="flex gap-2">
          <button
            class="px-3 py-1 text-base rounded-md bg-blue-600 text-white"
            onClick={bucketTextEdit}
          >
            Save
          </button>
          <button
            class="px-3 py-1 text-base rounded-md bg-blue-800 text-white"
            onClick={handleIsEditable}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Edit button */}
      {!props.item.complete && !isEditable() && (
        <button
          className="px-3 py-1 text-base rounded-md bg-blue-600 text-white"
          onClick={handleIsEditable}
        >
          Edit
        </button>
      )}
    </li>
  );
}
