import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapPage() {
    const googleMapsApiKey = 'AIzaSyA-4sAuNB1Ru1s456uOKNqfBOjj1Ya0HoI';


    const locations = [
        { lat: -6.1861838, lng: 106.8364761, name: 'Museum Sumpah Pemuda' },
        { lat: -6.137127, lng: 106.813005, name: 'Museum Bank Indonesia' },
        { lat: -6.1722241, lng: 106.8189695, name: 'Museum Taman Prasasti' },
        { lat: -6.1349072, lng: 106.8124452, name: 'Museum Wayang' },
        { lat: -6.1764021, lng: 106.8215901, name: 'Museum Nasional' },
        { lat: -6.190942, lng: 106.767622, name: 'Museum Macan (Modern and Contemporary Art in Nusantara)' },
        { lat: -7.8024499, lng: 110.3639555, name: 'Museum Sonobudoyo Unit I' },
        { lat: -7.5978656, lng: 110.4233959, name: 'Museum Ullen Sentalu' },
        { lat: -6.9007162, lng: 107.6214553, name: 'Museum Geologi Bandung' },
        { lat: -6.9211092, lng: 107.609597, name: 'Museum Konferensi Asia Afrika' },
        { lat: -6.9375748, lng: 107.603775, name: 'Museum Sri Baduga' },
        { lat: -7.2308173, lng: 112.7342344, name: 'House of Sampoerna' },
        { lat: -7.2454369, lng: 112.7378985, name: 'Museum Sepuluh Nopember Kota Surabaya' },
        { lat: 5.547883757, lng: 95.31521156, name: 'Museum Tsunami Aceh' },
        { lat: 5.548543234, lng: 95.32095792, name: 'Museum Aceh' },
        { lat: 3.56831207, lng: 98.69637072, name: 'Museum Negeri Sumatera Utara' },
        { lat: 2.333218939, lng: 99.04841912, name: 'Museum Batak TB Silalahi' },
        { lat: -0.9567851727, lng: 100.3562178, name: 'Museum Adityawarman' },
        { lat: 0.4941194493, lng: 101.454479, name: 'Museum Sang Nila Utama' },
        { lat: 1.129549896, lng: 104.0536614, name: 'Museum Raja Ali Haji' },
        { lat: -1.607871107, lng: 103.592869, name: 'Museum Negeri Jambi/Museum Siginjei' },
        { lat: -3.815645442, lng: 102.2875752, name: 'Museum Bengkulu' },
        { lat: -2.990137418, lng: 104.7614057, name: 'Museum Sultan Mahmud Badaruddin II' },
        { lat: -5.372302796, lng: 105.2408186, name: 'Museum Lampung' },
        { lat: -2.118269932, lng: 106.1094776, name: 'Museum Timah' },
        { lat: -6.03838363, lng: 106.1584014, name: 'Museum Negeri Banten' },
        { lat: -7.264566937, lng: 110.4046942, name: 'Museum Kereta Api Ambarawa' },
        { lat: -6.985663749, lng: 110.3840419, name: 'Museum Ranggawarsita' },
        { lat: -8.65756299, lng: 115.21859, name: 'Museum Bali' },
        { lat: -8.492443283, lng: 115.2535167, name: 'Museum Neka' },
        { lat: -8.505232852, lng: 115.2603746, name: 'Museum Puri Lukisan' },
    ];

    const center = { lat: -6.2088, lng: 106.8456 };

    const onClick = (e) => {
        console.log('Clicked on the map:', e.latLng);
    };

    return (
        <LoadScript
            googleMapsApiKey={googleMapsApiKey}
            libraries={['places']}
        >
            <GoogleMap
                center={center}
                zoom={12}
                mapContainerStyle={{
                    width: '100%',
                    height: '400px'
                }}
                onClick={onClick}
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.lat, lng: location.lng }}
                        label={location.name}
                        onClick={() => console.log(`Clicked marker: ${location.name}`)}
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                        }}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}

export default MapPage;
