import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {

    const navigate = useNavigate();
    const [newTitle, setNewTitle] = useState('');

    const handleInputChange = (e) => {
        setNewTitle(e.target.value);
    };

    const addTask = () => {
        try {
            fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: newTitle })
            })
                .then((res) => res.json())
                .then(() => {
                    setNewTitle('')
                    alert('Task Added')
                    navigate('/')
                })
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='my-12 w-full lg:w-1/3 mx-auto'>
            <div className='mb-4 shadow-md p-6 text-center border-dashed border-x-4 border-black rounded-xl mx-4 lg:mx-0'>
                <h1 className='text-2xl border-y-2 p-2 border-dashed border-black rounded-b-2xl font-mono font-semibold'>Add Tasks</h1>
            </div>

            <div className='shadow-xl p-10 flex flex-col gap-4'>
                <div className='border-b-2 border-black rounded p-1 mx-4 lg:mx-0'>
                    <h1 className='text-xl mb-2 font-mono font-bold border-b-4 w-8 border-black'>Title</h1>
                    <input
                        type="text"
                        placeholder="Add Task Title Here"
                        value={newTitle}
                        onChange={handleInputChange}
                        className="input w-full max-w-full p-0 focus:outline-none animate-pulse" />
                </div>
                <div className='p-2 bg-black text-white font-bold font-sans text-center mt-6 rounded hover:bg-[#3d3d3d]'>
                    <button onClick={() => addTask()}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;