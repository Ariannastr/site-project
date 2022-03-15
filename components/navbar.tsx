import Link from 'next/link';
import { useState } from 'react'


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleOpenHandler = () => setOpen(!open);

    return (
        <div>
            <div className="relative px-4 pb-2 pt-2 bg-orange-400 sm:px-6 md:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full lg:w-auto">
                            <Link href='/'>
                                <a className='inline-flex items-center p-2 mr-4 '>
                                <img className="w-auto h-8 rounded-full" src="/img/agata.jpg" alt="" />
                                    <span className=' p-2 text-xl text-white font-bold uppercase tracking-wide'>
                                    NCS Agata
                                    </span>
                                </a>
                            </Link>
                
                            <button onClick={toggleOpenHandler} type="button" className='inline-flex p-2 hover:bg-orange-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none' id="main-menu" aria-label="Main menu" aria-haspopup="true">
                                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            
                        </div>
                    </div>
                    <div
                    className={`${
                        open ? 'hidden' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                    >
                        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                            <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white '>
                                Home
                            </a>
                            </Link>
                            <Link href='/about-us'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                Chi Siamo
                            </a>
                            </Link>
                            <Link href='/activities'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                Cosa Facciamo
                            </a>
                            </Link>
                            <Link href='/instructors'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                Istruttori
                            </a>
                            </Link>
                            <Link href='/join-us'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                Unisciti a Noi
                            </a>
                            </Link>
                            <Link href='/galleryS'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                Galleria
                            </a>
                            </Link>
                            <Link href='/contacts'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                Contatti
                            </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            {/* 
              Mobile menu, show/hide based on menu open state.

              Entering: "duration-150 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
            */}
            {open &&
                <div style={{ transition: 'all 3s ease-in-out' }} className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden">
                    <div className="rounded-lg shadow-md">
                        <div className="overflow-hidden bg-orange-300 rounded-lg shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <img className="w-auto h-10" src="/img/agata.jpg" alt="" />
                                </div>
                                <div className="-mr-2">
                                    <button onClick={toggleOpenHandler} type="button" className="inline-flex items-center justify-center p-2 text-blue-400 transition duration-150 ease-in-out rounded-md hover:text-blue-500 hover:bg-blue-100 focus:outline-none focus:bg-blue-100 focus:text-blue-500" aria-label="Close menu">
                                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 ">
                                <Link href='/'>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white '>
                                        Home
                                    </a>
                                </Link>
                            </div>
                            <div className="px-2 pt-2 pb-3">
                                <Link href='/about-us'>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                        About us
                                    </a>
                                </Link>
                            </div>
                            <div className="px-2 pt-2 pb-3">
                                <Link href='/activities'>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                        Cosa Facciamo
                                    </a>
                                </Link>
                            </div>
                            <div className="px-2 pt-2 pb-3">
                                <Link href='/instructors'>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                        Istruttori
                                    </a>
                                </Link>
                            </div>
                            <div className="px-2 pt-2 pb-3">
                                <Link href='/join-us'>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                        Unisciti a Noi
                                    </a>
                                </Link>
                            </div>
                            <div className="px-2 pt-2 pb-3">
                                <Link href='/galleryS'>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                        Galleria
                                    </a>
                                </Link>
                            </div>
                            <div className="px-2 pt-2 pb-3">
                                <Link href='/contacts'>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-orange-600 hover:text-white'>
                                        Contatti
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
  }