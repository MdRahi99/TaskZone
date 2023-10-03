import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from '@react-icons/all-files/fi/FiEdit';
import { FiDelete } from '@react-icons/all-files/fi/FiDelete';

const ViewTasks = ({ task, index }) => {

    const { text } = task;
    const id = 1

    return (
        <div className='flex items-center justify-between'>
            <Link to={`/task/:${id}`}>
                <h1 className='w-52 hover:bg-black hover:text-white rounded text-xl px-2 py-1 font-mono font-semibold'>
                    {`${index}. ${text}`}
                </h1>
            </Link>
            <div className='flex items-center justify-between gap-3'>
                <button>
                    <FiEdit className='font-bold text-xl hover:text-emerald-500' />
                </button>
                
                <button>
                    <FiDelete className='font-bold text-xl hover:text-orange-600' />
                </button>
            </div>
        </div>
    );
};

export default ViewTasks;