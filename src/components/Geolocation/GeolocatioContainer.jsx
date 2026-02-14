import { useState, useEffect } from "react";
import Geolocation from "./Geolocation";

function GeolocationContainer(){
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    function handleLocationSettings(coordinates){
        console.log(coordinates.coords);
        setLatitude(coordinates.coords.latitude);
        setLongitude(coordinates.coords.longitude);
    }
    useEffect(() =>{
        console.log("Starting executing after",navigator);
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(handleLocationSettings);
        }
    }, [navigator])
    return(
        <Geolocation latitude={latitude} longitude={longitude}/>
    );
}
export default GeolocationContainer;