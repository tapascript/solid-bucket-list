import { createSignal } from "solid-js";

export function BucketListItem(props) {
  const [isEditable, setIsEditable] = createSignal(false);
  const [editableText, setEditableText] = createSignal("");

  // Bucket text edit
  const bucketTextEdit = () => {
    if (editableText() === "") {
      alert(`You can't submit empty value`);
    } else {
      props.setItems((items) => {
        const newItems = items.map((item) =>
          props.item === item ? { ...item, text: editableText() } : item
        );
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
              return newItems;
            });
          }}
        />
        {/* Item text */}
        {isEditable() ? (
          <input
            type="text"
            value={editableText()}
            onChange={(e) => {
              setEditableText(e.target.value);
            }}
          />
        ) : (
          props.item.text
        )}
      </label>

      {/* save and cancel button */}
      {isEditable() && (
        <div>
          <button onClick={bucketTextEdit}>Save</button>
          <button onClick={handleIsEditable}>Cancel</button>
        </div>
      )}

      {/* Edit button */}
      {!props.item.complete && !isEditable() && (
        <button onClick={handleIsEditable}>Edit</button>
      )}
    </li>
  );
}
