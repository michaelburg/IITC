import { useState } from 'react'
import './App.css'
function makeId(length) { 
  let result = ''; const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) { 
  result += characters.charAt(Math.floor(Math.random() * charactersLength)); 
  }
  return result; 
}
const data =
  [
    { id: '1', title: 'Learn React', isComplete: false ,isEditing:false},
    { id: '2', title: 'Build a Todo App', isComplete: false ,isEditing:false},
    { id: '3', title: 'Read JavaScript Documentation', isComplete: true ,isEditing:false},
    { id: '4', title: 'Write Unit Tests', isComplete: false ,isEditing:false},
    { id: '5', title: 'Implement Context', isComplete: true ,isEditing:false},
    { id: '6', title: 'Create Portfolio Website', isComplete: false ,isEditing:false},
    { id: '7', title: 'Learn TypeScript', isComplete: false ,isEditing:false},
    { id: '8', title: 'Refactor Codebase', isComplete: true ,isEditing:false},
    { id: '9', title: 'Optimize Performance', isComplete: false ,isEditing:false},
  ]
function App() {
  const [tasks, setTasks] = useState(data)
  
  function handleCheckboxChange(id) {
   const newTasks= tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    })
  setTasks(newTasks)

  }

  function deleteTask(id) {
    const newTasks= tasks.filter(tasks => tasks.id !== id);
    setTasks(newTasks)

  }

  function editTask(id) {
    const newTasks= tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isEditing:!task.isEditing };
      }
      return task;
    })
  setTasks(newTasks)
  }


  function setNewTaskName(newTaskName,id){
    const newTasks= tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title:newTaskName };
      }
      return task;
    })
    setTasks(newTasks)
    }
  
    function createTask() {
      const newTasks=[...tasks,{ id: makeId(100), title: '', isComplete: false,isEditing:true }]
      setTasks(newTasks)

  }
function submitNewTask(id){

  const newTasks= tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isEditing:!task.isEditing };
    }
    return task;
  })
setTasks(newTasks)
}
if(tasks.length==0)
  return <>
  <h1>to-do app</h1>
  <p>No todos available</p>
      <button onClick={createTask}>Create new task</button>
      </>
  else
  return (
    <>
  <h1>to-do app</h1>
      <button onClick={createTask}>Create new task</button>
      <p>all: {tasks.filter((task) => !task.isEditing).length} complited:{tasks.filter((task) => task.isComplete&&!task.isEditing).length} not complited:{tasks.filter((task) => !task.isComplete&&!task.isEditing).length}   </p>
      <div id="Progress">
      <div
  id="Bar"
  style={{
    width: `${
      (tasks.filter((task) => task.isComplete && !task.isEditing).length * 100) /
      tasks.filter((task) => !task.isEditing).length
    }%`
  }}
>{((tasks.filter((task) => task.isComplete && !task.isEditing).length * 100) /
tasks.filter((task) => !task.isEditing).length).toFixed(2)}</div>  
    </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              id={task.id}
              checked={task.isComplete}
              onChange={() => handleCheckboxChange(task.id)}
            />
            {!task.isEditing ? (
              <>
                <label htmlFor={task.id}>{task.title}</label>
                <button onClick={() => editTask(task.id)}>Edit</button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="new task"
                  value={task.title}
                  onChange={(ev) => setNewTaskName(ev.target.value,task.id)}
                />
                <button onClick={() => submitNewTask(task.id)}>submit</button>
              </>
            )}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
