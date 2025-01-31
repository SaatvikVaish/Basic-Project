function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task!');
      return;
    }
  
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskInput.value;
  
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      taskList.removeChild(li);
    };
  
    // Append the delete button to the list item
    li.appendChild(deleteButton);
  
    // Append the list item to the task list
    taskList.appendChild(li);
  
    // Clear the input field
    taskInput.value = '';
  }