import React,{useContext} from "react";
import {Input,Button} from 'react-native-elements';
import { StyleSheet,View } from "react-native";
import { Context as LocationContext } from "../Contexts/LocationContext";
const CreatemapForm=({title,onSetTitle})=>{
    const {startRecording,stopRecording,state:{isRecording}}=useContext(LocationContext);
    return (
        <View style={styles.container}>
            <Input 
            style={styles.inputStyle}
            value={title}
            placeholder="Enter Title"
            onChangeText={(newVal)=>onSetTitle(newVal)}
            />
            {!isRecording ? <Button title="Record" onPress={()=>{
                if(title){
                    startRecording();
                }
                else{
                    alert('Please enter title before starting recording');
                }
            }}/> : 
            <Button title="Stop" 
            onPress={stopRecording}
            />
            }
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        margin:10
    },
    inputStyle:{
        borderWidth:1,
        flex:1
    }
})

export default CreatemapForm;