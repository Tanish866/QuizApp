import UseGeolocation from "../../hooks/UseGeolocation";

function GeolocationNewUi(){
    const [latitude, longitude] = UseGeolocation();
    return(
        <div>
            <h1>Geolocation: </h1>
            <h1>Lattitude: {latitude}</h1>
            <h1>Longitude: {longitude}</h1>
        </div>
    )
}
export default GeolocationNewUi;