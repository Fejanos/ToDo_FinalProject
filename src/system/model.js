class Model
{
    // Private field
    #data = [];

    constructor()
    {
        this.#load();
    }

    // Add new Task
    insertTask(task)
    {

        var id = 1;
        var count = this.#data.length
        if(count > 0)
        {
            id = this.#data[count - 1].id + 1;
        }
        task.id = id;
        this.#data.push(task);

        this.#save();
    }

    // Get Task
    getTasks()
    {
        return this.#data; 
    }

    // Task "completiton"
    setTaskDone(taskId)
    {
        // Get index
        var index = this.#data.findIndex(task => task.id == taskId);
        this.#data.splice(index, 1);
        
        this.#save();
    }

    // Private method
    #save()
    {
        // Convert data array to JSON
        var json = JSON.stringify(this.#data);
        localStorage.setItem("todolist-data", json); // Move it to our "local storage"
    }

    // Private method
    #load()
    {
        // Get the datas from our "local storage"
        var json = localStorage.getItem("todolist-data");
        
        if(json)
        {
            this.#data = JSON.parse(json);
        }
    }
}