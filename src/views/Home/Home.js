import React, { useEffect, useState } from 'react'
import "./Home.css"
import imgadd from "./button.png"
import TaskCard from '../../component/TaskCard/TaskCard';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newtask , setNewtask] = useState('');
  const [error , setError] = useState('');


  const addTask = () => {
    if (newtask === ''){
      setError('Please enter a task!!');
      return
    }
    else if(newtask.length < 5 ){
      setError('Task should be at least 5 characters long!')
    }
    else{
      setError("")
    }

    setTasks([ newtask, ...tasks]);
    setNewtask('')
  }

  const deleteTask = (index) => {
    const newtaskss = tasks;
    newtaskss.splice(index,1);
    setTasks([...newtaskss])
  }

 useEffect (()=>{
  if (tasks.length ===0 ){
    return
  }

   localStorage.setItem('tasks', JSON.stringify(tasks))
 } ,[tasks])

 useEffect(()=>{
  const tasks = localStorage.getItem('tasks');
  if (tasks){
    setTasks(JSON.parse(tasks));
  }
 },[])


  return (
    <div class='background-img'>
      <div class="todo-container ">
        <div class="to-do-title">
          ToDo App
        </div>



        <div>
          <input 
          type='text' 
          placeholder='Add a new task' 
          className='p-2 m-3 w-75 input' 
          value={newtask}
          onChange={(e)=>{
            setNewtask(e.target.value)
          }}
          />

          <img 
          src={imgadd} 
          height={40} 
          className='add-btn' 
          alt='add' 
          onClick={addTask}
          />
        </div>
        <p className='text-danger text-center'>{error}</p>
        <div className='d-flex flex-column overflow-y-scroll h-75 '>
          {
            tasks.map((task, i) => {
              return (
                
              <TaskCard 
              task={task} 
              key={i} 
              del={deleteTask} 
              index={i}/>
             
                )
            })
          }
          
        </div>

       

      </div>
      

    </div>
  )
}

export default Home