import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewTasks from '../Tasks/ViewTasks';
import LeftBanner from './LeftBanner';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Home = () => {

    const [tasks, setTasks] = useState([]);
    const taskApi = 'http://localhost:5000/tasks';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(taskApi)
                setTasks(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []);

    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/task/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: 'Are you sure you want to delete?',
                        showCancelButton: true,
                        confirmButtonText: 'Ok',
                        denyButtonText: `Cancel`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Success',
                                text: 'Deleted Successfully!!!',
                                confirmButtonText: 'Ok'
                            })
                            const remaining = tasks.filter(task => task._id !== _id);
                            setTasks(remaining);
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })
                }
            })
            .catch(error => {
                console.error("Error deleting book:", error);
            });
    };

    return (
        <div className="my-12 mx-6">
            {
                !tasks.length > 0 ?
                    <LeftBanner />
                    :
                    <div className='w-full lg:w-3/6 mx-auto'>
                        <h1 className='text-2xl text-center font-serif font-semibold p-2 border-b-4 rounded-md border-black mb-3'>Your Tasks</h1>
                        {
                            tasks.map((task, index) => {
                                return <ViewTasks
                                    key={task._id}
                                    task={task}
                                    index={index + 1}
                                    handleDelete={handleDelete}                            >
                                </ViewTasks>
                            })
                        }
                        <div className='w-40 mx-auto mt-20'>
                            <Link className='px-4 py-2 rounded text-md font-mono hover:bg-[#424242] bg-black text-white' to='/add-task'>
                                Add More Task
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Home;