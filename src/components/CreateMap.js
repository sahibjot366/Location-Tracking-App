import MapView,{Marker} from "react-native-maps";
import React,{useContext} from "react";
import { StyleSheet } from "react-native";
import { Context as LocationContext } from "../Contexts/LocationContext";
const CreateMap=()=>{
    const {state:{currlocation}}=useContext(LocationContext);
    
    return (
        <MapView
        style={styles.mapStyle}
        region={{
            latitude:currlocation.coords.latitude,
            longitude:currlocation.coords.longitude,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        }}
        >
        {currlocation!=null?<Marker
        coordinate={{
            latitude:currlocation.coords.latitude,
            longitude:currlocation.coords.longitude
        }}
        title="Initial Location"
        /> : null}
        </MapView>
    )
}

const styles=StyleSheet.create({
    mapStyle:{
        height:350,
        width:350,
        alignSelf:'center',
        margin:5
    }
})

export default CreateMap;