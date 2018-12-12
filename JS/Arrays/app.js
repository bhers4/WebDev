
// window.setTimeout(function () {
// 	// Put Code in here to give HTML 500ms to load
// 	var todos = [];
// 	var input = prompt("What would you like to do?");

// 	while(input !== "quit")
// 	{
//         if(input==="new")
//         {
//             // Add new thing to list
//             var newtodo = prompt("Enter todo");
//             todos.push(newtodo);
//         }
//         else if (input=="list")
//         {
//         	console.log("List");
//             todos.forEach(function(todo,i)
//             	{
//             		console.log(i+": "+todo);
//             	}
//             	)
//         }
//         else if (input=="delete")
//         {
//         	var index = prompt("Enter index of todo to delete(between 0-" + ((todos.length)-1) + "):");
//         	todos.splice(index,1); // Start at index and delete 1 number aka just the index we want to delete
//         }
//         else
//         {
//             // Invalid Command
//         }

//         input = prompt("What would you like to do?");
// 	}

// },500);


var reversenumbers = [1,2,3];
var uniformnums = [1,1,1];

print_reverse(reversenumbers);
isUniform(reversenumbers);
isUniform(uniformnums);

function print_reverse(numbers)
{
	var length = numbers.length;
	// => isnt the same as >= , >= is the right one
	for (var i = length-1;i>=0;i--)
	{
		console.log(numbers[i]);
	}
	console.log("Here");
	return;
}


function isUniform(arr)
{
	if (arr.length<=1)
	{
		console.log("True");
		return true;
	}
	else
	{
		for (var i = 1;i<arr.length;i++)
		{
			if (arr[0]!=arr[i])
			{
				console.log("False");
				return false;
			}
		}
		console.log("True");
		return true;
	}
}