let count = 0;
document.getElementById('add-task-btn').addEventListener('click', function(event){
    const taskInputField= event.target.parentNode.children[0];
    const newTask = event.target.parentNode.children[0].value;
    if (newTask =="") {
        return alert ('Please write a task for add')
    }
    const tableContainer = event.target.parentNode.parentNode.children[2].children[0].children[1];
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <th>${count += 1}</th>
    <td>${newTask}</td>
    <td>
      <button class="done-btn btn bg-green-500 hover:bg-green-700 px-3 text-white font-semibold">Done</button>
      <button class="delete-btn btn bg-red-500 hover:bg-red-700 px-3 text-white font-semibold">Delete</button>
    </td>
    `
    tableContainer.appendChild(tr);
    taskInputField.value= '';

    // Done btn 
    const doneBtn = document.querySelectorAll('.done-btn');
    for (let btn of doneBtn) {
        btn.addEventListener('click', function(event){
        event.target.parentNode.parentNode.style.textDecoration =
        "line-through";
        btn.disabled = true; 
        event.target.parentNode.parentNode.style.backgroundColor = 'lightgreen'
        })
    }
      // delete btn
      const deleteBtn = document.querySelectorAll('.delete-btn')
      for (let btn of deleteBtn) {
          btn.addEventListener('click',function(event){
              event.target.parentNode.parentNode.style.display = 'none';
          })
      }
        document.getElementById('clear-all').addEventListener('click',function(){
            const table = document.getElementById('table');
            table.style.display= 'none';
        })
})

document.getElementById('task-add').addEventListener('keyup', function(event){
    if (event.key === 'Enter') {
        const taskInputField= event.target.parentNode.children[0];
    const newTask = event.target.parentNode.children[0].value;
    if (newTask =="") {
        return alert ('Please write a task for add')
    }
    const tableContainer = event.target.parentNode.parentNode.children[2].children[0].children[1];
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <th>${count += 1}</th>
    <td>${newTask}</td>
    <td>
      <button class="done-btn btn bg-green-500 hover:bg-green-700 px-3 text-white font-semibold">Done</button>
      <button class="delete-btn btn bg-red-500 hover:bg-red-700 px-3 text-white font-semibold">Delete</button>
    </td>
    `
    tableContainer.appendChild(tr);
    taskInputField.value= '';
    }

    // Done btn 
    const doneBtn = document.querySelectorAll('.done-btn');
    for (let btn of doneBtn) {
        btn.addEventListener('click', function(event){
        event.target.parentNode.parentNode.style.textDecoration =
        "line-through";
        btn.disabled = true; 
        event.target.parentNode.parentNode.style.backgroundColor = 'lightgreen'
        })
    }
      // delete btn
      const deleteBtn = document.querySelectorAll('.delete-btn')
      for (let btn of deleteBtn) {
          btn.addEventListener('click',function(event){
              event.target.parentNode.parentNode.style.display = 'none';
          })
      }
        document.getElementById('clear-all').addEventListener('click',function(){
            const table = document.getElementById('table');
            table.style.display= 'none';
        })
})

