import {useState, useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskForm() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const {createTask} = useContext(TaskContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            desc 
        }); 
        setTitle('');
        setDesc('');
    }

    return (
        <div className="max-w-md bg-slate-800 m-auto mb-8 py-10 text-center rounded-md shadow-2xl">
            <h3 className="text-xl text-[#f1f1f1] font-semibold capitalize mb-3">Set a new task!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder="What's the new task?" className="w-[250px] h-[45px] p-[10px] rounded-sm" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <textarea placeholder="Write the task's description..." className="w-[250px] p-[10px] rounded-sm" onChange={(e) => setDesc(e.target.value)} value={desc}></textarea>
                </div>
                <button className="w-[150px] h-[45px] bg-green-500 text-[20px] text-[#f1f1f1] font-bold mt-5 rounded-sm delay-150 hover:bg-green-400">Save</button>
            </form>
        </div>
    );
}

export default TaskForm