import Image from 'next/image'
import { useState } from 'react'
// import { SearchIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router'


const Header = ({ placeholder }) => {





    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)
    const router = useRouter()


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }


    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3
         bg-white shadow-md p-5 md:px-10" id="header">

            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image onClick={() => router.push("/")} src="https://links.papareact.com/qd3" layout="fill"
                    objectFit="contain"

                />
            </div>



            <div className="md:border-2 flex items-center
            md:shadow-sm rounded-full py-2 px-2">
                <input type="text" className="pl-2 bg-transparent placeholder-black outline-none flex-grow"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}

                    placeholder={placeholder || "Start your search"} />

                <div className="bg-red-400 p-2 rounded-full ">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5
                cursor-pointer text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>

            </div>

            <div className="flex items-center justify-end  ">
                <p className="hidden md:inline cursor-pointer py-3 px-3 rounded-full hover:bg-gray-100">Become a host</p>

                <div className="p-3 rounded-full hover:bg-gray-100 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                </div>


                <div className="flex items-center space-x-2 border-2 p-2 rounded-full
                cursor-pointer hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            {
                searchInput && (
                    <div className="flex flex-col col-span-3 mx-auto">


                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#fD5D51']}
                            onChange={handleSelect}
                        />
                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl pl-2 flex-grow
                         font-semibold">Number of Guests: </h2>


                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>

                            <input type="number"
                                value={noOfGuests}
                                min={1}
                                onChange={(e) => setNoOfGuests(e.target.value)}
                                className="w-12 pl-2 outline-none" />
                        </div>

                        <div className="flex">
                            <button className="flex-grow text-gray-500"
                                onClick={resetInput}>Cancel</button>
                            <button className="flex-grow text-red-400"
                                onClick={search}>Search</button></div>
                    </div>
                )
            }

        </header>
    )
}

export default Header
