import React,{useContext} from "react";
import { Context } from "../Contexts/AuthContext";
import {StyleSheet} from 'react-native';
import {Text,Button} from 'react-native-elements'
import { SafeAreaView } from "react-navigation";
const SignOutScreen=({navigation})=>{
    const {signOut}=useContext(Context);
    return (
        <SafeAreaView style={{margin:10,flex:1,justifyContent:'center'}} forceInset={{ top: 'always' }}>
            <Text h3>Sign Out</Text>
            <Button
            title="Sign Out"
            onPress={signOut}
            />
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({})

export default SignOutScreen;