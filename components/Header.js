import Image from 'next/image'
// import { SearchIcon } from '@heroicons/react/solid'
const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3
         bg-white shadow-md p-5 md:px-10">

            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" layout="fill"
                    objectFit="contain"

                />
            </div>



            <div className="md:border-2 flex items-center
            md:shadow-sm rounded-full py-2 px-2">
                <input type="text" className="pl-2 bg-transparent placeholder-black outline-none flex-grow"
                    placeholder="Start your search" />


                <svg className="h-6 w-6 md:bg-red-400 text-black
                    rounded-full md:mx-2 cursor-pointer  md:inline-flex p-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>


            </div>

            <div className="flex items-center justify-end space-x-4 ">
                <p className="hidden md:inline cursor-pointer">Become a host</p>


                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full
                cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Header
