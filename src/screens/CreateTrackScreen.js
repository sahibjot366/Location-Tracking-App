import '../../_mockLocation'
import React,{useState,useContext, useCallback} from "react";
import { StyleSheet } from 'react-native';
import CreateMap from "../components/CreateMap";
import { SafeAreaView,withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import CreatemapForm from "../components/CreatemapForm";
import { Context as LocationContext } from "../Contexts/LocationContext";
import useLocation from '../hooks/useLocation';
const CreateTrackScreen=({isFocused})=>{
    const {updateLocation,state:{currlocation,isRecording}}=useContext(LocationContext);
    const [title,setTitle]=useState('');
    const callback=useCallback((location)=>{
        updateLocation(isRecording ,location);
    },[isRecording]);
    const [err]=useLocation(isFocused || isRecording,callback);
    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Text h4 style={styles.headingStyle} >Create New Track</Text>
            {title!=null ? <Text h6 style={styles.titleStyle}>{title}</Text> :null}
            {currlocation!=null ? <CreateMap /> : null}
            {err!=null ? <Text>Please grant location permission</Text> : null}
            <CreatemapForm title={title} onSetTitle={(newVal)=>setTitle(newVal)}/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    headingStyle:{
        marginTop:30,
        alignSelf:'center'
    },
    container:{
        margin:10
    },
    titleStyle:{
        alignSelf:'center'
    }
})

export default withNavigationFocus(CreateTrackScreen);