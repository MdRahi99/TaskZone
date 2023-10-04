import React from 'react';
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';

const UpdateTask = () => {

    const taskData = useLoaderData();
    const { text, _id } = taskData;
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const updatedTask = { text };

        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(() => {
                alert('Updated Successfully')
                navigate('/')
            })
    };

    return (
        <div className='w-full lg:w-3/6 mx-auto my-12'>
            <div className='shadow-xl p-10 flex flex-col gap-4'>
                <form onSubmit={handleUpdate} className=''>
                    <div className='border-b-2 border-black rounded p-1 mx-4 lg:mx-0'>
                        <h1 className='text-2xl text-center mb-8 font-mono font-bold w-full'>Update Your Task Here</h1>
                        <h1 className='text-xl mb-2 font-mono font-bold border-b-4 w-8 border-black'>Title</h1>
                        <input
                            type="text"
                            placeholder="Add Task Title Here"
                            defaultValue={taskData?.text}
                            name='text'
                            className="input w-full max-w-full p-0 focus:outline-none text-black font-medium" />
                    </div>
                    <div className='p-2 bg-black text-white font-bold font-sans text-center mt-6 rounded hover:bg-[#3d3d3d]'>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;