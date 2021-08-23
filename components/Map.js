import { getCenter } from 'geolib'
import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const Map = ({ searchResults }) => {

    const [selectLocation, setSelectLocation] = useState({})


    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/naim33/cks3f1icb3ngu17qwzt528cqe"
            mapboxApiAccessToken={process.env.mapBox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}>

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}>
                        <p onClick={() => setSelectLocation(result)}
                            className="push-pin"
                            role="img">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </p>
                    </Marker>
                    {/* popup of marker */}

                    {selectLocation.long === result ? (

                        <Popup onClose={() => setSelectLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}>
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}

                </div>
            ))}

        </ReactMapGL>
    )
}

export default Map
