import React from 'react';
import { Link } from 'react-router-dom';

const LeftBanner = () => {
    return (
        <div className='border-l-2 border-b-4 shadow-xl border-dashed border-teal-600 shadow-sky-200 p-4 rounded-md w-full h-80 gap-4 justify-center flex flex-col text-center'>
            <h1 className='text-lg font-semibold font-mono w-full'>Effortlessly Manage Your Tasks with <br /><br /> <span className='text-3xl font-bold text-teal-600 border-l-2 border-b-4 border-dashed p-2 border-teal-600'>TaskZone</span></h1>
            <div className='flex flex-col mt-16 gap-3'>
                <p className='text-2xl font-bold font-mono'>To Create New Task</p>
                <Link to='/add-task' className='w-1/2 mx-auto lg:w-full px-2 py-1 font-serif font-medium hover:bg-teal-500 bg-teal-700 text-white rounded text-md'>Click Here</Link>
            </div>
        </div>
    );
};

export default LeftBanner;