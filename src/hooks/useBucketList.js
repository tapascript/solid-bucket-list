// Desc: Custom hook to manage bucket list items to local storage

import { createEffect, createSignal } from "solid-js";

function useBucketList() {
    const [items, setItems] = createSignal([]);

    createEffect(() => {
        const bucketList = localStorage.getItem('bucket-list');
        if (bucketList) setItems(JSON.parse(bucketList));
    
      });
      
      createEffect(() => {
        localStorage.setItem('bucket-list', JSON.stringify(items()));
      });
      return [items, setItems];
}

export default useBucketList