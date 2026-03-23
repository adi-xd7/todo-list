const todoList=[];

renderTodoList();

function renderTodoList(){
    let todoListHTML='';

    for(let i=0; i<todoList.length; i++){
        const todo=todoList[i];
        //const todo=todo.name;
        //const todo=todo.dueDate;
        const {name, dueDate}=todo;
        const htmltext=`
        <div>${name}</div>
        <div>${dueDate} </div>
        <button onclick=" 
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delbutton">Delete</button>
        `;
        todoListHTML+=htmltext;
    }

    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}
function addTodo() {
  const inputEle = document.querySelector('.js-name-inp');
  const name = inputEle.value.trim();

  const dateInputEle = document.querySelector('.js-date');
  const dueDate = dateInputEle.value;

  if (name === '') {
    alert('Please enter a todo name');
    return;
  }

  if (dueDate === '') {
    alert('Please select a date');
    return;
  }

  todoList.push({
    name,
    dueDate
  });

  inputEle.value = '';
  dateInputEle.value = '';

  renderTodoList();
}

