import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className='flex flex-col gap-3 w-full lg:w-1/3 mx-auto my-40 text-center font-mono'>
                <div className='border-double border-y-2 border-black p-8 my-3 mx-2'>
                    <h1 className='text-4xl font-bold'>404 Not Found</h1>
                </div>

                <Link to='/' className='p-4 mx-2 bg-black hover:bg-[#414040] text-white text-2xl'>
                    Back to Home
                </Link>
            </div>
        </>
    );
};

export default Error;