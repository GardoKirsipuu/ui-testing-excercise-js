# Todo App - requirements

This simple front-end based todo list app consists of a simple UI that allows the user to manage a single list of strings. Here are some guidelines and rules the UI should follow:

1. The list contents should store its state in the browser's local storage so that user input is not lost after a page refresh.
2. New items should be added by a button. But no more than one empty item is allowed to be created. The UI should not allow creating several empty items in a row.
3. All items should have an 'isDone' checkbox that is not visible if the item does not have any text in it.
4. The text of already created items should be editable. But validation has to be in place to not remove the text completely.
5. The items should have a delete option to remove them from the list.
6. The order of the items has to be editable via a drag and drop functionality.
