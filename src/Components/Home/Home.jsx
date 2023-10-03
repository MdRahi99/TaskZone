import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewTasks from '../Tasks/ViewTasks';
import banner from '../../Assets/img/banner-1.jpg';
import LeftBanner from './LeftBanner';

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
                const isConfirmed = window.confirm("Are you sure you want to delete?");
                if (isConfirmed) {
                    if (data) {
                        alert('Task Deleted Successfully!!!')
                        const remaining = tasks.filter(task => task._id !== _id);
                        setTasks(remaining);
                    }
                }
            })
            .catch(error => {
                console.error("Error deleting book:", error);
            });
    };

    return (
        <div className='grid grid-cols-12 my-12 gap-6'>
            <div className="grid col-span-12 mx-6 lg:mx-0 lg:col-span-4">
                {
                    tasks.length > 0 ?
                        <div>
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
                        </div>
                        :
                        <LeftBanner />
                }
            </div>

            <div className='hidden lg:block col-span-12 lg:col-span-8 mx-6 lg:mx-0'>
                {
                    tasks.length > 0 ?
                    <div>
                        
                    </div>
                    :
                    <img className='rounded h-96 w-full' src={banner} alt="" />
                }
            </div>
        </div>
    );
};

export default Home;