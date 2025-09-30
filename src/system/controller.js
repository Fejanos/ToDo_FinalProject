class Controller
{
    // Private fields - objects
    #model = new Model();
    #view = new View();

    // Navigation
    constructor()
    {
        this.#view.navigationEvents(
            () => this.inputActivity(),
            () => this.listActivity()
        );
    }

    // Input event
    inputActivity()
    {
        // Add task view
        this.#view.showInputView();
        // New task
        this.#view.onNewTaskClick(task => 
        {
            this.#model.insertTask(task);
            // Message
            this.#view.showMessage();
            // Field clear
            this.#view.clearInputs();
        });
    }

    // List event
    listActivity()
    {
        // List view
        this.#view.showListView();
        
        // Get from local storage
        var tasks = this.#model.getTasks();
        this.#view.updateList(tasks);
        this.#view.onDoneClick(taskId =>
        {
            // Give task's id
            this.#model.setTaskDone(taskId);
            this.listActivity();
        });
    }
}