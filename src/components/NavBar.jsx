import React from 'react'
import { CgMenu } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from './Dropdown';

const NavBar = () => {
    return (
        <div className='sticky top-0 left-10 right-0 w-full z-10 h-nav shadow-sm flex flex-col items-center bg-white'>

            <div className='h-[22%] flex-row justify-between items-center py-2 px-4 md:px-6'>
                <div className='flex flex-row items-center gap-8'>
                    <img src='achievers.png' />

                    <CgMenu className='h-14 w-14 hidden md:block' />
                    <div className='relative hidden md:flex'>
                        <Dropdown />
                        <input type='search' placeholder='search' className='w-[200px] lg:w-[300px] px-2 py-[2px] border border-1 border-gray-600' />
                        <button className='absolute right-0 top-1/2  rounded-full -translate-y-1/2'>
                            <AiOutlineSearch className='w-9 h-9  border-transparent bg-blue-600' />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default NavBar