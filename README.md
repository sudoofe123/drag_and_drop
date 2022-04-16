# drag_and_drop
Drag and Drop in Vanilla JavaScript

**Using the HTML5 Drag and Drop API+

A number of events are triggered at various phases of the drag and drop procedure:

dragstart: When the user begins dragging the item, this event occurs.
dragenter: When the mouse is moved over the target element for the first time when dragging, this event is triggered.
dragover: When a drag occurs, this event is triggered when the mouse is dragged over an element. The process that happens during a listener is frequently the same as the dragenter event.
dragleave: When the mouse leaves an element while dragging, this event is triggered.
drag: When the mouse is moved while the item is being dragged, this event is triggered.
drop: At the completion of the drag operation, the drop event is fired on the element where the drop happened. A listener would be in charge of obtaining the dragged data and putting it at the drop place.
dragend: When the user releases the mouse button while dragging an item, this event occurs.
