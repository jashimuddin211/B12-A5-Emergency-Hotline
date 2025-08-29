1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans:
   getElementById-
   This as the fastest, most direct route. It finds a single element by its unique ID. It's super fast because IDs are supposed to be one of a kind.

getElementsByClassName-
This one is for getting a group of elements. It returns a "live" collection of all elements with a specific class name. "Live" means if you add or remove an element with that class later, the collection automatically updates.

querySelector and querySelectorAll-
These are the most flexible of the bunch. They let you select elements using any CSS selector you can think of (like classes, IDs, tag names, or even complex combinations).
querySelector returns just the first element it finds that matches the selector.
querySelectorAll returns a static list of all matching elements. "Static" means it's a snapshot in time; it won't update automatically if the DOM changes.

2. How do you **create and insert a new element into the DOM**?
   Ans:
   To create and insert a new element into the DOM, It typically follow a three-step process:

Create the element: Use document.createElement('tagName'). This method creates a new node in memory.

Customize the element: it can set properties like textContent, className, or id, or use setAttribute() to add attributes.

Insert the element: Append the new element as a child to an existing parent element in the DOM using methods like appendChild() or append().  
3. What is **Event Bubbling** and how does it work?
Ans:
Event bubbling is a mechanism where an event that occurs on an element propagates up through its parent elements in the DOM tree. When an event, like a click, happens on a nested element, the browser first executes the event handler on that element. It then "bubbles" the event up to the parent, then to the parent's parent, and so on, all the way up to the document object.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans:
   Event delegation is a pattern that leverages event bubbling to efficiently handle events on multiple elements. Instead of adding a separate event listener to each child element, add a single event listener to a common parent element.

It is useful because it-

Improves performance: It reduces the number of event listeners in the DOM, which uses less memory.

Simplifies code: You don't need a loop to attach a listener to every element, which is especially useful for dynamically generated content.

Handles dynamic content: Events are automatically handled for new elements that are added to the parent later, as they also bubble up.  
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
preventDefault- This method stops the browser's default behavior for a specific event. For example, it can prevent a link from navigating to a new page, a form from submitting, or a checkbox from being checked

stopPropagation- This method stops the event from propagating further up the DOM tree (i.e., it stops the event from "bubbling"). It prevents the event from being handled by any parent event listeners
