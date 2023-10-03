import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewTasks from '../Tasks/ViewTasks';

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

    return (
        <div className='grid grid-cols-12 my-12'>
            <div className="grid col-span-12 gap-8 mx-6 lg:mx-0 lg:col-span-3">
                <h1 className='text-2xl text-center font-serif font-semibold p-2 border-b-4 rounded-md border-black mb-3'>Your Tasks</h1>
                {
                    tasks.map((task ,index) => {
                        return <ViewTasks
                            key={task._id}
                            task={task}
                            index={index + 1}
                            >
                        </ViewTasks>
                    })
                }
            </div>

            <div className='col-span-12 lg:col-span-9 mx-6 lg:mx-0'>

            </div>
        </div>
    );
};

export default Home;