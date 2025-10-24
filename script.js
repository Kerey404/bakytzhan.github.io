
document.addEventListener('DOMContentLoaded', () => {
  // Console info (Task 0 / Task 1)
  console.log("Name: Бақытжан Қасымғали");
  console.log("Group: SE-2421");

  const hoverBox = document.getElementById('hoverBox');
  const keyInput = document.getElementById('keyInput');
  const displayValue = document.getElementById('displayValue');
  const myForm = document.getElementById('myForm');
  const errorEl = document.getElementById('error');

  // ----- Task 0 -----
  window.helloWorld = function() {
    alert("Hello, JavaScript World!");
  };

  // ----- Task 1 -----
  window.showVariables = function() {
    let name = "Baqytzhan";
    let age = 18;
    let isStudent = true;
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Is student:", isStudent);
    console.log("Age + 2 =", age + 2);
    console.log("Greeting:", "Hello " + name + "!");
  };

  // ----- Task 2 -----
  window.changeText = function() {
    document.getElementById("text").innerText = "The text has been changed!";
  };

  // ----- Task 3 -----
  window.changeColor = function() {
    document.getElementById("colorBox").style.backgroundColor = "lightgreen";
  };
  window.changeFontSize = function() {
    document.getElementById("colorBox").style.fontSize = "18px";
  };

  // ----- Task 4 -----
  window.addItem = function() {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
  };
  window.removeItem = function() {
    const list = document.getElementById("itemList");
    if (list.lastElementChild) list.removeChild(list.lastElementChild);
  };

  // ----- Task 5 (Mouse Events) -----
  if (hoverBox) {
    hoverBox.addEventListener("mouseover", () => {
      hoverBox.style.backgroundColor = "lightcoral";
    });
    hoverBox.addEventListener("mouseout", () => {
      hoverBox.style.backgroundColor = "#f0f0f0";
    });
  }

  // ----- Task 6 (Keyboard Events) -----
  if (keyInput) {
    keyInput.addEventListener('keyup', () => {
      displayValue.innerText = keyInput.value;
    });
  }

  // ----- Task 7 (Form Validation) -----
  if (myForm) {
    myForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      if (!name || !email || !password) {
        errorEl.innerText = "Please fill in all fields!";
        return false;
      }
      errorEl.innerText = "";
      alert("Form submitted successfully!");
      myForm.reset();
      return true;
    });
  }

  // ----- Task 8 (To-Do List) -----
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const taskCount = document.getElementById('taskCount');

  function updateCount() {
    const count = taskList.children.length;
    taskCount.innerText = `Tasks: ${count}`;
  }

  window.addTask = function() {
    const text = taskInput.value.trim();
    if (text === "") {
      taskInput.focus();
      return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    span.style.flex = "1";

    // Toggle complete on click (except when pressing delete)
    span.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    const del = document.createElement('button');
    del.className = 'task-del';
    del.textContent = 'Delete';
    del.addEventListener('click', () => {
      li.remove();
      updateCount();
    });

    li.appendChild(span);
    li.appendChild(del);
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
    updateCount();
  };

  if (addTaskBtn) addTaskBtn.addEventListener('click', addTask);

  // Allow Enter to add task
  if (taskInput) {
    taskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
      }
    });
  }

  // Initialize counts
  updateCount();
});
