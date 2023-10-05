import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateTask = () => {

    const navigate = useNavigate();
    const [newTitle, setNewTitle] = useState('');

    const handleInputChange = (e) => {
        setNewTitle(e.target.value);
    };

    const addTask = () => {
        try {
            fetch('https://task-zone-server.onrender.com/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: newTitle })
            })
                .then((res) => res.json())
                .then(() => {
                    setNewTitle('')
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Task Added Successfully!!!',
                        confirmButtonText: 'Ok'
                      })
                    navigate('/')
                })
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='my-12 w-full lg:w-3/6 mx-auto'>
            <div className='mb-4 shadow-md p-2 text-center rounded-xl mx-4 lg:mx-0'>
                <h1 className='text-2xl text-center font-serif font-semibold p-2 border-b-4 rounded-md border-black mb-3'>Add Tasks</h1>
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