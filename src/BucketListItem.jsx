export function BucketListItem(props) {

  const handleButtonClick = ()=>{
    props.setItems((items)=>{
      const newItems = items.map((item)=> props.item === item ? {...item, delete: !item.delete} : item);
      return newItems;
    });
  }

  return (
    <>
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
        {props.item.text}
      </label>
      <button type="button" onClick={handleButtonClick}>
        <span>{props.item.delete ? 'X' : ''}</span>
      </button>
    </li>
    </>
  );
}
