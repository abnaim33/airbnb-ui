import Image from "next/image"


const InfoCard = ({ img, location, title, star, description, price, total }) => {
    return (
        <div className="flex py-7 px-7 border-b
        cursor-pointer hover:opacity-80 hover:shadow-lg
        transition duration-100 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80
            flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover"
                    className="rounded-2xl" />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>

                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between">
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        {star}
                    </p>

                    <div>
                        <p className="text-lg lg:text-xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extrabold">{total}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard
