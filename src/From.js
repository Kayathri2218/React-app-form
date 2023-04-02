import React, { useState } from 'react';

const Form = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescri, setTaskDescri] = useState('');
    const [taskChecked, setTaskChecked] = useState('');
    const [formSummited, displaySubmmited] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        console.log("e", e.target.value, e.target.name);
        if (e.target.name === 'name') {
            setTaskName(e.target.value)
        } else {
            setTaskDescri(e.target.value)
        }
    }

    const checkedFunction = (e) => {
        if (e.target.checked) {
          console.log("true");
          setTaskChecked(true);
        } else {
          console.log("false");
          setTaskChecked(false);
        }
    };
      
    const submit = () => {
        displaySubmmited(true)
        if(taskName === "" || taskDescri === "") 
        return
        console.log(taskName, taskDescri, taskChecked);
        setTasks([...tasks, { name: taskName, description: taskDescri, checked: taskChecked }]);
    }

    return (
        <div>
            <form>
                <input 
                name='name' 
                value={taskName}
                onChange={handleInputChange} 
                placeholder="Task Name"
                />
                {taskName === "" && formSummited && <div>Task name is required</div>}
                <input 
                name='descri' 
                value={taskDescri}
                onChange={handleInputChange}
                placeholder="Task Description" 
                />
                 {taskDescri === "" && formSummited && <div>Task description is required</div>}
                <input 
                type={'checkbox'}
                value = {taskChecked}
                id = "checked"
                onChange={checkedFunction}
                />
                <label name = 'checked'>ok</label>
            </form>
            <button onClick={submit}>Submit</button>
            <div>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <p>Name: {task.name} <br />
                         Description: {task.description} <br />
                        Checked: {task.checked ? "true" : "false"}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form;

