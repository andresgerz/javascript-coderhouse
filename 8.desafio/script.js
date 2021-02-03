let form = document.querySelector('#form-task');
const allData = new Array();

allData.push({
  'task': 'Homework',
  'priority': 'High',
  'date': '25-03-2021',
  'time': '10:00 hs'
})


const handleDelete = (e) => {

  if (e > -1 ) {
    allData.splice(e, 1);
  }

  showTasks();
}

const showTasks = () => {
  let tasksList = document.querySelector('.tasks-list');
  
  tasksList.innerHTML = allData.map((item, index) => 
    `<div class="task">
      <h3>${item.task}</h3>
      <p><strong>Priority:</strong> ${item.priority}</p>
      <p><strong>Date:</strong> ${item.date} | <strong>Time:</strong> ${item.time}</p>
      <input type="button" onclick="handleDelete(${index});" value="Delete"/>
    </div>`
  );
  
}

const handleData = (e) => {
  e.preventDefault();
  
  let taskObj = {
    'task': document.querySelector("#input_task_id").value,
    'priority': document.querySelector("#select_priority_id").value,
    'date': document.querySelector("#input_date_id").value,
    'time': document.querySelector("#input_time_id").value
  }
  
  allData.push(taskObj);
  showTasks();
}

form.addEventListener("submit", handleData, false);
showTasks();