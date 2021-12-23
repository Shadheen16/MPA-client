import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const Search = () => {
    return (
        <div className="md:flex justify-center items-center gap-8 py-[100px]">
            <div className='flex justify-center items-center px-5 w-full h-[55px] max-w-[800px] border-2 rounded-md bg-white'>
                <input className="focus:outline-none w-full inline-block" placeholder="What even you are looking for ?" type="text" />
                <SearchIcon className="w-6 h-6 cursor-pointer "/>
            </div>
            <select className="px-5 rounded-md inline-block h-[55px]">
                <option value="">Filter search</option>
            </select>
            
        </div>
    );
};

export default Search;