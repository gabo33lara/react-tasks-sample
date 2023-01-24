import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskList() {
    const {tasks} = useContext(TaskContext);
    if(tasks.length === 0) {
        return <h1 className="text-[48px] font-bold mt-[100px]">No tasks found!</h1>
    }

    return (
        <div className="m-auto text-center">
            <h1 className="text-5xl font-extrabold capitalize mb-[30px]">tasks found: <span className="text-7xl text-green-500 font-extrabold">{tasks.length}</span></h1>
            <div className='grid grid-cols-4 gap-6'>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}

export default TaskList