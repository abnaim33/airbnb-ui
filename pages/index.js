import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import outdoor from '../images/outdoor.jpg';
import entire from '../images/entireHomes.jpg';
import unique from '../images/unique.jpg'
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

const cardData = [{
  img: outdoor,
  title: 'Outdoor gateways'
}, {
  img: unique,
  title: 'Unique Stays'
}, {
  img: entire,
  title: 'Entire Homes'
}, {
  img: outdoor,
  title: 'Outdoor gateways'
},]


export default function Home({ exploreData }) {

  return (
    <div>
      <Head>
        <title>airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Header />
      {/* banner */}

      <Banner />

      <main className="max-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 
lg:grid-cols-3 xl:grid-cols-4">
            {
              exploreData.map(item =>
              (<SmallCard key={item.img} img={item.img} distance={item.distance}
                location={item.location} />))
            }
          </div>
        </section>



        <section className="pt-10 pb-10">
          <h2 className="text-4xl font-semibold py-0 mb-5">
            Live Anywhere
          </h2>
          <div className="flex space-x-3
         overflow-scroll scrollbar-hide">
            {
              cardData?.map(item => (
                <MediumCard key={item.img}
                  img={item.img} title={item.title}

                />
              ))
            }
          </div>
        </section>


        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb"
          buttonText="Get Inspired" />


      </main>


      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await
    fetch('https://links.papareact.com/pyp')
      .then(
        (res) => res.json()
      );




  return {
    props: {
      exploreData

    }
  }
}