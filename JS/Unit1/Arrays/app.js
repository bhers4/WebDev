window.setTimeout(function () {
	// Put Code in here to give HTML 500ms to load


	var todos = [];
	var input = prompt("What would you like to do?");

	while(input !== "quit")
	{
        if(input==="new")
        {
            // Add new thing to list
            var newtodo = prompt("Enter todo");
            todos.push(newtodo);
        }
        else if (input=="list")
        {
            console.log(todos);
        }
        else
        {
            // Invalid Command
        }

        input = prompt("What would you like to do?");
	}

},500);
