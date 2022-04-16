const items = document.querySelectorAll(".item");
const columns = document.querySelectorAll(".column");

//dragstart: When the user begins dragging the item, this event occurs.
//dragend: When the user releases the mouse button while dragging an item, this event occurs.
items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);

  item.addEventListener("dragend", dragEnd);
});

let dragItem = null;

function dragStart() {
  console.log("drag started");
  dragItem = this;
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  console.log("drag ended");
  this.className = "item";
  dragItem = null;
}

function dragDrop() {
  console.log("drag dropped");
  this.append(dragItem);
}

//dragover: When a drag occurs, this event is triggered when the mouse is dragged over an element. The process that happens during a listener is frequently the same as the dragenter event.
//dragenter: When the mouse is moved over the target element for the first time when dragging, this event is triggered.
//dragleave: When the mouse leaves an element while dragging, this event is triggered.
//drag: When the mouse is moved while the item is being dragged, this event is triggered.
columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}
function dragEnter() {
  console.log("drag entered");
}
function dragLeave() {
  console.log("drag left");
}
