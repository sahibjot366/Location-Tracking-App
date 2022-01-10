import React,{useContext} from "react";
import {Text,View,StyleSheet} from 'react-native';
import Authentication from "../components/Authentication";
import LinkMaker from "../components/LinkMaker";
import { Context } from "../Contexts/AuthContext";
import { NavigationEvents } from "react-navigation";
const SignUpScreen=({navigation})=>{
    const {state,signUp,removeError} = useContext(Context);
    return (
        <View style={styles.container}>
            <NavigationEvents 
            onWillBlur={removeError}
            />
        <Authentication
        headerText="Sign Up for Tracker"
        buttonTitle="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={(email,password)=>signUp({email,password})}
        />
        <LinkMaker
        linkText="Alredy Having Account? Sign In here!"
        onPress={()=>navigation.navigate('SignIn')}
        />
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:10,
        borderWidth:0
    }
})

export default SignUpScreen;