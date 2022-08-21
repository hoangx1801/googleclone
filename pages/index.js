/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  // search function
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* {header} */}
      <header className='flex justify-between w-full p-5 text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>

          <Avatar url='https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png'/>

        </div>
      </header>

      {/* {body} */}
      <form action="" className='flex items-center flex-col mt-36 flex-grow'>
        <Image 
          src='https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          height={100}
          width={300}
        />
        <div className='flex w-full mt-5 hover:shadow-lg rounded-full focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input type="text" ref={searchInputRef} className='focus:outline-none flex-grow' />
          <MicrophoneIcon className='h-5'/>
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn' onClick={search}>I&apos;m Feeling Lucky</button>
        </div>
      </form>

      {/* {footer} */}
      <Footer />
    </div>
  )
}
