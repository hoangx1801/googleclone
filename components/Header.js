/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Avatar from "./Avatar";
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    
    const search = (e) => {
      e.preventDefault();

      const term = searchInputRef.current.value;
      if (!term) return;

      router.push(`/search?term=${term}`);
    }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image 
            src='https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
            height={40}
            width={120}
            onClick={() => router.push('/')}
            className='cursor-pointer'
        />
        <form action="" className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input type="text" 
            ref={searchInputRef}
            className='flex-grow w-full focus-within:outline-none'
          />
          <XIcon onClick={() => (searchInputRef.current.value = "")}
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"/>
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
          <SearchIcon className="h-6 text-blue-500 sm:inline-flex hidden"/>
          <button hidden type="submit" onClick={search}>Search</button>
        </form>

        <Avatar className='ml-auto' url='https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png'/>
      </div>

      {/* {HeaderOptions} */}
      <HeaderOptions />
    </header>
  )
}

export default Header