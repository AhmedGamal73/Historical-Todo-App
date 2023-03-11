const todoEl = document.getElementById('todo_title');
const todosCon = document.getElementById('todos_container');
const btn = document.getElementById('todo_btn');
// todoEl.addEventListener('keydown', e => {
// 	console.log(e.value) 
// })

const displayTodo = () => {
	const todo = document.createElement('H1');
	todo.innerHTML = todoEl.value;
	todosCon.appendChild(todo)
}


const todoTitle = btn.addEventListener('click', (e) => {
	e.preventDefault();
	if (todoEl.value !== '') { // check if there's text in the field
 		displayTodo();
		todoEl.value = "";
	};
});

const data = {
	id: Math.random(),
	title: todoEl.value
}

console.log(data.title)


