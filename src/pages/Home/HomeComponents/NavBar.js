import React from 'react';
import { MenuAlt1Icon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Logo from "../../../Images/logo.svg"
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';


const NavBar = () => {
    return (
        <div className="px-5 py-[20px] text-gray-600 flex justify-between font-roboto text-[2vh]">
            {/* left */}
            <div className="flex-1 flex items-start md:items-center">
                <h2>EN</h2>
                <div className="hidden  border ml-5 md:flex p-2"><input type="text" className="focus:outline-none" /><SearchIcon className="w-6 cursor-pointer" /></div>
            </div>
            {/* center */}
            <div className="flex-1 flex justify-center">
                <div>
                    <img src={Logo} className='w-24' alt="" />
                </div>
            </div>
            {/* right */}
            <div className="font-bold flex-1 flex items-center">
                <ul className="hidden font-bold flex-1 md:flex items-center justify-end space-x-[65px]">
                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                        HOME
                    </li >
                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                        INCUBATOR
                    </li>
                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                        LEARN
                    </li>
                </ul>
                <Disclosure as="div" className="bg-purple-100 md:hidden">
                    {({ open }) => (
                        <>
                        {/* mobile-menu button */}
                            <Disclosure.Button className="px-4 py-2 font-medium text-left text-clr-primary bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-clr-accent focus-visible:ring-opacity-75">
                                {
                                    open ? <XIcon className="w-6 h-6" /> : <MenuAlt1Icon className="w-6 h-6" />
                                }
                            </Disclosure.Button>
                            <Disclosure.Panel className=" ">
                                <ul className="font-bold flex-column items-center">
                                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                                        HOME
                                    </li >
                                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                                        INCUBATOR
                                    </li>
                                    <li className="cursor-pointer hover:translate-x-2 transition-all duration-300 ease-out ">
                                        LEARN
                                    </li>
                                </ul>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default NavBar;