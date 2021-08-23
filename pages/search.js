import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"
import Head from 'next/head'

const Search = ({ searchResults }) => {
    const router = useRouter()

    // document.title = 



    const { location, startDate, endDate, noOfGuests } = router.query

    const formatItStartDate = format(new Date(startDate), "dd MMMM yy")


    const formatItEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formatItStartDate}-${formatItEndDate}`

    //this search name is in lower case.so i don't need to use routing and import

    return (
        <>
            <Head>
                <title>{`${location} : Stays :Airbnb`}</title>
            </Head>
            <Header placeholder={`${location},${startDate},${endDate}`} />

            <main className="flex">
                <section className="flex-grow pt-14 px-4">
                    <p className="text-xs">300+ Stays -{range} for {noOfGuests} n guests</p>

                    <h1 className="text-3 font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex
                    mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>

                        <p className="button">Type of place</p>

                        <p className="button">Price</p>

                        <p className="button">Rooms and Beds</p>

                        <p className="button">More Filters</p>
                    </div>

                    <div className="flex flex-col">


                        {
                            searchResults.map(({ img, location, title, description, star
                                , price, total }) => (
                                <InfoCard key={img}
                                    img={img}
                                    location={location}
                                    title={title}
                                    description={description}
                                    star={star}
                                    price={price}
                                    total={total} />
                            ))
                        }

                    </div>

                </section>

                <section className="hidden xl:inline-flex xl:min-w-[550px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Search

export const getServerSideProps = async () => {
    const searchResults = await fetch('https://links.papareact.com/isz')
        .then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}