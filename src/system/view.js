class View
{
    // Private fields based on HTML tags, ids, classes
    #inputView = document.querySelector("section.task-form"); // input 
    #message = this.#inputView.querySelector("p.message");
    #listView = document.querySelector("section.collection"); // list
    #ulList = this.#listView.querySelector("ul.list"); // todo list from HTML

    // Methods
    showInputView() // Change displays
    {
        this.#message.style.display = "none";
        
        this.#listView.style.display = "none";
        this.#inputView.style.display = "block";
    }

    showListView(entityName) // Input hide and list display
    {
        this.#ulList.innerHTML = ''; // Clear the html content
        
        this.#inputView.style.display = "none";
        this.#listView.style.display = "block";
    }

    // Navbar links
    navigationEvents(newMethod, listMethod, jobMethod)
    {
        var links = document.querySelectorAll("nav ul.nav-links a");
        
        this.#clickEvent(links[0], newMethod);
        this.#clickEvent(links[1], listMethod);
        this.#clickEvent(links[2], jobMethod);
    }

    // Add click
    onNewTaskClick(method)
    {
        var button = this.#inputView.querySelector("button");
        this.#clickEvent(button, function()
        {
            var title = document.getElementById("title").value;
            var desc = document.getElementById("description").value;

            if(title)
            {
                // New object
                var task = 
                {
                    title: title,
                    description: desc
                };

                method(task);
            }
        });
    }

    // Input clear
    clearInputs()
    {
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }

    // Show message
    showMessage()
    {
        this.#message.style.display = "block";
        setTimeout(() => 
        {
            this.#message.style.display = "none";
        }, 
        1500);
    }

    // Update the list
    updateList(tasks)
    {
        var html = '';

        if(tasks.length > 0)
        {
            for(var task of tasks)
            {
                var desc = task.description;
                if(!desc)
                {
                    desc = "Empty description";
                }

                html += `<li><h3>${task.title}</h3>
                            <p>${desc}</p>
                            <div><a href="${task.id}">
                                <i class="fa fa-check"></i> Done
                            </a></div></li>`;
            }
        }
        else
        {
            html = "<li>You don't have any tasks</li>";
        }

        this.#ulList.innerHTML = html;
    }

    // Done onclick
    onDoneClick(method)
    {
        var links = this.#ulList.querySelectorAll("a");
        
        for(var link of links)
        {
            this.#clickEvent(link, function()
            {
                var id = this.getAttribute("href");
                method(id);
            });
        }
    }

    // Private method, general clicks
    #clickEvent(elem, method)
    {
        elem.onclick = function(evt)
        {
            evt.preventDefault();
            method.call(this);
        };
    }
}