import React, { useState } from 'react';

function Welcome() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-grid-white h-[100vh]'>

            {/* Navbar Components */}
            <div className="navbar bg-black text-white bg-opacity-25">
                <nav className="flex justify-between items-center p-4">
                    <div className="text-2xl font-bold">{'<'}{'/>'}</div>

                    {/* Hamburger Icon */}
                    <div className="sm:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <div className="space-y-2">
                            <span className="block w-8 h-0.5 bg-white"></span>
                            <span className="block w-8 h-0.5 bg-white"></span>
                            <span className="block w-8 h-0.5 bg-white"></span>
                        </div>
                    </div>
                    
                    {/* Navbar Links for Large Screens */}
                    <ul className='hidden sm:flex space-x-8 font-mono font-extrabold md:p-2 md:text-xl'>
                        <li><a href="#project-owner" className='text-white hover:bg-white hover:text-black hover:rounded-full transition-all duration-200 md:p-2 md:px-5'>Project Owner</a></li>
                        <li><a href="#project-details" className='text-white hover:bg-white hover:text-black hover:rounded-full transition-all duration-200 md:p-2 md:px-5'>Project Details</a></li>
                        <li><a href="#getting-started" className='text-white hover:bg-white hover:text-black hover:rounded-full transition-all duration-200 md:p-2 md:px-5'>Getting Started</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="sm:hidden flex flex-col items-center space-y-4 font-mono font-extrabold bg-black bg-opacity-0 text-white p-4">
                        <li><a href="#project-owner" className='hover:bg-gray-800 hover:rounded-lg transition-all duration-150 p-2'>Project Owner</a></li>
                        <li><a href="#project-details" className='hover:bg-gray-800 hover:rounded-lg transition-all duration-150 p-2'>Project Details</a></li>
                        <li><a href="#getting-started" className='hover:bg-gray-800 hover:rounded-lg transition-all duration-150 p-2'>Getting Started</a></li>
                    </ul>
                )}
            </div>

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
            <button 
                type="button" 
                className='px-6 py-3 bg-[rgb(14,165,233)] font-sans rounded-lg text-lg sm:text-xl lg:text-2xl hover:bg-blue-600 transition-all'>
                Get Started
            </button>
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
