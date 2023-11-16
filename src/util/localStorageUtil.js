const dummy_Data = [
  { id: crypto.randomUUID(), text: "Walk the dog", complete: false },
  { id: crypto.randomUUID(), text: "Do homework", complete: true },
];

/**
 *  return saved wishes data from local-storage.
 *  if no data is saved to localstorage then return dummy data
 */
export function getWishes() {
  const wishes = JSON.parse(localStorage.getItem("solid-bucket-list"));

  return wishes ? wishes : dummy_Data;
}

//  Save new wish to localstorage
export function saveWish(wishes) {
  localStorage.setItem("solid-bucket-list", JSON.stringify(wishes));
}

export function setComplete(wishes) {
  saveWish(wishes);
}
