import React from "react";
import { TouchableOpacity,StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const LinkMaker=({linkText,onPress})=>{
    return (
        <>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.link}>{linkText}</Text>
        </TouchableOpacity>
        </>
    )
}

const styles=StyleSheet.create({
    link:{
        color:'blue',
        marginVertical:10
    }
})

export default LinkMaker;