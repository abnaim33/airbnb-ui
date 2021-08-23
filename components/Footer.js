

const Footer = () => {
    return (
        <div className="footer space-y-10 px-32 py-14 bg-gray-100">

            <div className=" grid grid-cols-1 md:grid-cols-4
         text-gray-400">






                <div className="space-y-4 text-sm text-gray-800">
                    <h5 className="font-bold">About</h5>

                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Investing</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb love</p>
                </div>


                <div className="space-y-4 text-sm text-gray-800">
                    <h5 className="font-bold">About</h5>

                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Investing</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb love</p>
                </div>


                <div className="space-y-4 text-sm text-gray-800">
                    <h5 className="font-bold">About</h5>

                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Investing</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb love</p>
                </div>

                <div className="space-y-4 text-sm text-gray-800">
                    <h5 className="font-bold">About</h5>

                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Investing</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb love</p>
                </div>

            </div>



            <div className="footer-bottom flex justify-between pt-5 border-t flex-wrap">
                <div className="flex">


                    &copy;{new Date().getFullYear()} Airbnb,Inc. <p className="ml-3">Privacy</p> <span className="mx-3">:</span> <p>Terms</p><span className="mx-3">:</span> <p>SiteMap</p>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>

                    English(US)    <span className="ml-5">$ USD</span>

                    <div className="flex content-between items-center ml-10">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter mx-3"></i>
                        <i className="fa fa-instagram"></i>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer
