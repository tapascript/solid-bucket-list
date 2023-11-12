import { createEffect, createSignal } from 'solid-js';
import {Modal} from './Modal';

export function BucketListItem(props) {
  const [isOpen, setIsOpen] = createSignal(false);

  createEffect(()=>{
    console.log(isOpen());
  })

  const handleDeleteItem = ()=>{
      props.setItems((items) => {
        const itemsWithoutTheDeletedOne = items.filter((item) =>
          props.item !== item
        );
        return itemsWithoutTheDeletedOne;
      });
      setIsOpen(false);
    }

  return (
    <>
    {isOpen() && <Modal text='Are you sure? You want to delete this! 😕' setIsOpen={setIsOpen} handleDeleteItem={handleDeleteItem} />}

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
      <button type="button" onclick={()=> setIsOpen(true)}>
        X
      </button>
    </li>
    </>
  );
}
