const form = document.querySelector("form");
const input = document.querySelector("input");
const output = document.querySelector(".output");
const countWrapper = document.querySelector(".countWrapper");

let todos = [];

const createTask = () => {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    alert("Sorry, but this place cannot be empty!");
    return;
  }

  const task = {
    id: new Date().toISOString(),
    message: inputValue,
    status: false,
    date: new Date(),
  };

  todos = [...todos, task];
  console.log(todos);
  input.value = "";
  renderTodos();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTask();
  renderCountWrapper();
});

const renderCountWrapper = () => {
  const doneCount = todos.filter((todo) => todo.status).length;
  countWrapper.textContent = `${doneCount}/${todos.length} todos is done`;
};

const renderTodos = () => {
  output.innerHTML = "";
  todos.forEach((el, index) => {
    const block = document.createElement("div");
    const message = document.createElement("h3");
    const date = document.createElement("p");
    const status = document.createElement("p");

    const edit = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const done = document.createElement("button");

    status.classList = 'p2';
    date.classList = 'p';
    message.classList = 'h2';
    block.classList = "block";

    edit.textContent = "edit";
    deleteBtn.textContent = "delete";
    done.textContent = "done";

    if (el.status) {
      message.classList.add("completed");
    }

    el.status ? (status.textContent = "todo is completed") : (status.textContent = "todo is not completed");
    date.textContent = el.date.toLocaleDateString("KG");
    message.textContent = el.message;

    edit.addEventListener("click", () => {
      editTodo(el.id);
    });

    done.addEventListener("click", () => {
      doneTodo(el.id);
    });

    deleteBtn.addEventListener("click", () => {
      el.status && deleteTodoSplice(el.id);
    });

    edit.disabled = el.status === true;

    const numberElement = document.createElement('span');
    numberElement.innerText = index + 1;
    block.appendChild(numberElement);

    block.append(message, date, status, edit, deleteBtn, done);
    output.append(block);
  });
};

const editTodo = (id) => {
  const editedMessage = prompt("edit message");
  if (!editedMessage) return;
  todos = todos.map((item) => {
    if (id === item.id) {
      return { ...item, message: editedMessage };
    }
    return item;
  });
  console.log(todos);
  renderTodos();
  renderCountWrapper();
};

const doneTodo = (id) => {
  todos = todos.map((item) => {
    if (id === item.id) {
      return { ...item, status: !item.status };
    }
    return item;
  });
  console.log(todos);
  renderTodos();
  renderCountWrapper();
};

const deleteTodo = (id) => {
  todos = todos.filter((el) => el.id !== id);
  renderTodos();
  renderCountWrapper();
};

const deleteTodoSplice = (id) => {
  const index = todos.findIndex((el) => el.id === id);
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  todos = newTodos;
  renderTodos();
  renderCountWrapper();
};

document.addEventListener("DOMContentLoaded", function () {
  const deleteAllButton = document.getElementById("deleteAll");
  deleteAllButton.addEventListener("click", () => deleteAllTodos());
  renderCountWrapper();
});

const deleteAllTodos = () => {
  todos = [];
  renderTodos();
  renderCountWrapper();
};

// const array = [true, false, true, false, true];