import { createSignal } from "solid-js";

export function AddToBucket(props) {
    const [newItem, setNewItem] = createSignal("");

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
                    if (newItem()!=='') {
                        props.setItems((items) => {
                            return [
                                ...items,
                                { text: newItem(), complete: false },
                            ].reverse();
                        });
                        setNewItem("");
                    } else {
                        alert(`You can't submit empty value`);
                    }
                }}>
                Add
            </button>
        </form>
    );
}
