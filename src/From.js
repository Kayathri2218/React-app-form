import React, { useState } from 'react';

const Form = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescri, setTaskDescri] = useState('');
    const [taskChecked, setTaskChecked] = useState(''); 
    const [formSummited, displaySubmmited] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        if (e.target.name === 'name') {
            setTaskName(e.target.value)
        } else {
            setTaskDescri(e.target.value)
        }
    }

    const checkedFunction = (e) => {
        if (e.target.checked) {
          setTaskChecked(true);
        } else {
          setTaskChecked(false);
        }
    };

    const deletePerson = (del) => {
        let person = [...tasks];
        person.splice(del, 1);
        setTasks(person)
    }
      
    const submit = () => {
        displaySubmmited(true)
        if(taskName === "" || taskDescri === "") 
        return
        console.log(taskName, taskDescri, taskChecked);
        setTasks([...tasks, { name: taskName, description: taskDescri, checked: taskChecked }]);
        setTaskName(" ");
        setTaskDescri(" ");
        setTaskChecked(" ");
    }

    return (
        <div className='center'>
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
            <button onClick={() => submit()}>Submit</button>
            <div className='table'>
                <table>
                    <tr>
                        <th>No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Complete</th>
                            <th>Delete</th>
                        </tr>
                        {tasks.map((task, index) => {
                        return( <tr key={index}>
                            <td>{index+1}</td>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>{task.checked ? "true" : "false"}</td>
                            <td><button onClick={deletePerson}>Delete</button></td>
                        </tr>
                        )})}
                </table>        
            </div>
        </div>
    )
}

export default Form;