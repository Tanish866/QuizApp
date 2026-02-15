import { useState, useEffect } from "react";

export default function UseGeolocation(){
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
    }, [navigator]);
    return [latitude, longitude];
}