import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskCard({task }) {
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white text-center py-6 px-8 rounded-lg shadow-2xl delay-150 hover:bg-gray-700">
            <h3 className="text-3xl font-bold uppercase pb-2 border-b-2 border-b-slate-500 tracking-wide mb-1.5"><b>{task.Title}</b></h3>
            <p className="text-lg text-[#f1f1f1] mb-1.5">{task.Desc}</p>
            <button className="w-[100px] h-[35px] text-white font-bold bg-red-500 mt-3 rounded-sm delay-150 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Delete</button> 
        </div>
    )
}

export default TaskCard