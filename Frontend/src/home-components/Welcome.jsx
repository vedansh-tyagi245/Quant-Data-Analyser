import React from 'react';
import Navbar from './Navbar';

function Welcome() {

    return (
        <div className='bg-grid-white h-[100vh]'>

            {/* Navbar Components */}
            <Navbar/>

            {/* Hero Section */}
            <div className='flex flex-col justify-center items-center h-[70vh] px-4'>
                <div className="font-mono text-white font-bold w-full max-w-4xl text-center">
                    <div className='text-4xl sm:text-5xl lg:text-6xl leading-tight'>
                        Stock market analyzer
                    </div>
                    <div className='text-lg sm:text-xl lg:text-2xl mt-4'>
                        Transform the Way You Analyze Data—100% Faster, 100% Smarter.
                    </div>
                    <div className="btn flex flex-wrap justify-center gap-4 mt-6">
                        <a href='/Uploadfile' className='px-6 py-3 bg-[rgb(14,165,233)] font-sans rounded-lg text-lg sm:text-xl lg:text-2xl hover:bg-blue-600 transition-all'>
                            Get Started
                        </a>
                        <button
                            type="button"
                            className='px-6 py-3 bg-[rgb(30,41,59)] font-sans rounded-lg text-lg sm:text-xl lg:text-2xl hover:bg-gray-700 transition-all'>
                            View Tutorial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
