import {createContext, useState, useEffect} from 'react';
import {tasks as data} from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            // 'id': tasks.length + 1,
            'id': Math.floor(Math.random() * 100),
            'Title': task.title,
            'Desc': task.desc
        }]);
    }
    
    function deleteTask(taskId) {
        // console.log(taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}