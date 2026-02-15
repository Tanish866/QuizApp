import UseGeolocation from "../../hooks/UseGeolocation"

export default function GeolocationContainer(BaseComponent){

    const [latitude, longitude] = UseGeolocation();

    return function EnhancementGeolocation(props){
        return (
            <BaseComponent {...props} latitude={latitude} longitude={longitude} />
        )
    }
}