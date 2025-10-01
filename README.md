# My Todos
#### Video Demo:  [https://drive.google.com/drive/folders/1z5EZSDr1qkhjS6mOTZ-0zyurmdl1eLOQ?usp=sharing]

#### Description:
My Todos is a simple web-based to-do list application, created as a final project for CS50.
The app allows users to add, view, and complete tasks. It is built using HTML, CSS, and JavaScript, and follows the **MVC** pattern with separate `Model`, `View`, and `Controller` files.

---

### File-by-File Explanation
`model.js` – The Model
- The Model is responsible for all data-related operations.
- It maintains a private array #data where tasks are stored.
- The constructor automatically loads any previously saved tasks from local storage.
- insertTask(task): adds a new task, automatically assigning it a unique ID. IDs are incremental so each task can be referenced reliably.
- getTasks(): retrieves the full list of tasks for the view to display.
- setTaskDone(taskId): marks a task as completed by removing it from the array and saving the updated state.
- Private methods #save() and #load(): handle conversion of the task array to/from JSON and store it in local storage under the key "todolist-data".

A key design decision here was to use localStorage instead of a backend database. This keeps the project simple and self-contained, perfect for demonstration purposes. The trade-off is that tasks do not synchronize between devices or browsers.

--- 

`view.js` – The View

The View manages all DOM interactions and UI updates. It selects relevant HTML elements (task form, message paragraph, task list section) and provides methods for switching between views and updating content.

Key functionalities:
- showInputView() and showListView(): toggle between the input form and task list views.
- navigationEvents(): attaches event listeners to navigation links, allowing switching between “New Task” and “Task List” sections.
- onNewTaskClick(method): registers a callback for when the “Add” button is clicked. It collects the title and description inputs, creates a task object, and passes it to the controller.
- clearInputs(): clears input fields after a task is added.
- showMessage(): temporarily shows a confirmation message when a task is added.
- updateList(tasks): dynamically rebuilds the task list in HTML, showing task title, description, and a “Done” button. If there are no tasks, a fallback message is displayed.
- onDoneClick(method): attaches event listeners to each “Done” link so tasks can be completed.

A debated design choice was whether to use inline event attributes (onclick) in the HTML or JavaScript-based event listeners. The latter was chosen for separation of concerns and more control. Another choice was to represent completed tasks as strikethrough text or to remove them entirely. For simplicity, tasks are removed when marked done.

---
`controller.js` – The Controller
- The Controller acts as the middleman between the Model and the View.
- It initializes instances of both Model and View.
- It registers navigation events and routes user actions to the appropriate activity.
- inputActivity(): shows the task input form, listens for “Add” button clicks, and when triggered, instructs the model to insert a new task, then refreshes the view with a success message.
- listActivity(): shows the list view, retrieves tasks from the model, and updates the view accordingly. It also handles the logic for marking tasks as done.

This clear separation means the Controller does not directly manipulate DOM or data, but delegates to the correct module.

---

`script.js` – Entry Point

This is the simplest file, containing only:
```bash
    var controller = new Controller();
    controller.listActivity();
```


### Features
- ➕ Add new tasks with title and description
- 📌 View all tasks in a clean list format
- ✅ Mark tasks as “Done” (removes them from the list)
- 💾 Data persistence via localStorage
- 🎨 Responsive design with Font Awesome icons - link [https://fontawesome.com/v4/]

---

### Technologies Used
- HTML5 – structure
- CSS3 – styling (responsive and modern look)
- JavaScript (ES6+) – logic and interaction
- MVC architecture – separation of concerns
- localStorage – saving tasks in the browser

---

### How to Run
1. Clone the repository:
```bash
    git clone https://github.com/Fejanos/ToDo_FinalProject
    cd folder
```
2. Open index.html in your browser.
3. Start adding tasks!


--- 

⚡This project was created as part of CS50’s Final Project.
