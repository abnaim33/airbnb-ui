import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h[400px] lg:h-[500px]
        xl:h-[600px] 2xl:h-[700px]">
            <Image layout="fill" objectFit="cover" src="https://links.papareact.com/0fm" />

            <div className="absolute top-1/2 w-full text-center">
                <h5 className="text-sm sm:text-lg font-semibold lg:text-xl mb-4">Not sure where to go? Perfect.</h5>

                <button className="text-purple-500 bg-white px-10
                shadow-md py-4 rounded-full hover:shadow-xl active:scale-90
                transition duration-150">I'm flexible</button>
            </div>


        </div>
    )
}

export default Banner
