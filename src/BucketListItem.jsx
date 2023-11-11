export function BucketListItem(props) {
    const { item, setItems } = props;

    const handleDelete = () => {
        setItems((prevItems) => {
            return prevItems.filter((prevItem) => {
                return prevItem.text !== item.text;
            });
        });
    };

    return (
        <li
            class="list-item"
            style={{
                "text-decoration": props.item.complete
                    ? "line-through"
                    : undefined,
            }}>
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
                {props.item.text}
            </label>
            <button onClick={handleDelete} style={{ "margin-left": "10px" }}>
                Delete
            </button>
        </li>
    );
}
