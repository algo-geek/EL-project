import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <nav className='flex flex-wrap bg-black p-6'>
        <a
          className='flex items-center p-2 lg:ml-10 text-white cursor-pointer'
          onClick={ToggleSidebar}
        >
          <span>Assam, 784512, India</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='16'
            fill='#FFFF00'
            className='bi bi-chevron-down'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
            />
          </svg>
        </a>

        <button
          className='flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:flex lg:flex-grow lg:w-auto`}
          onClick={handleClick}
        >
          <div className='flex lg:flex lg:justify-end lg:flex-row lg:w-auto w-full ml-auto mr-2 lg:mr-8 flex-col space-x-4 lg:space-x-8 text-base'>
            <Link href='/'>
              <a
                id='navbtn'
                className='lg:flex lg:w-auto w-full px-4 py-2 rounded text-white ease-in-out duration-300'
              >
                Our Mission
              </a>
            </Link>
            <Link href='/donate'>
              <a
                id='navbtn'
                className='lg:flex lg:w-auto w-full py-2 rounded text-white ease-in-out duration-300'
              >
                Donate Food
              </a>
            </Link>
            <Link href='/request'>
              <a
                id='navbtn'
                className='lg:flex lg:w-auto w-full py-2 rounded text-white ease-in-out duration-300'
              >
                Get Food
              </a>
            </Link>
            <Link href='/volunteer'>
              <a
                id='navbtn'
                className='lg:flex lg:w-auto w-full py-2 rounded text-white ease-in-out duration-300'
              >
                Volunteer
              </a>
            </Link>
            <Link href='/listings'>
              <a
                id='navbtn'
                className='lg:flex lg:w-auto w-full py-2 rounded text-white ease-in-out duration-300'
              >
                Listings
              </a>
            </Link>
            <Link href='/register'>
              <button
                id='signup'
                className='lg:flex w-auto items-center justify-center px-5 py-1.5 ease-in-out duration-300'
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`sidebar fixed top-0 w-full sm:w-80 min-h-screen bg-white z-40 duration-500 mt-[11.7vh] 
            ${isOpen ? 'left-0' : '-left-full'}`}
      >
        <div className='justify-between p-4 flex items-center'>
          <h4>Sidebar</h4>
          <div className='cursor-pointer' onClick={ToggleSidebar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              className='bi bi-x-square-fill'
              viewBox='0 0 16 16'
            >
              <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z' />
            </svg>
          </div>
        </div>
        <div className='sd-body'>
          <span>Seacrh</span>
        </div>
      </div>
      <div
        className={`bg-grey3 fixed top-0 left-0 w-full h-full 
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 hidden'}`}
        onClick={ToggleSidebar}
      ></div>
    </>
  );
}
