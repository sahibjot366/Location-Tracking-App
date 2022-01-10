import React,{useContext} from "react";
import {Text,View,StyleSheet} from 'react-native';
import Authentication from "../components/Authentication";
import LinkMaker from "../components/LinkMaker";
import { Context } from "../Contexts/AuthContext";
import { NavigationEvents } from "react-navigation";
const SignInScreen=({navigation})=>{
    const {state,signIn,removeError}=useContext(Context);
    return (
        <View style={styles.container}>
            <NavigationEvents
            onWillBlur={removeError}
            />
        <Authentication
        headerText="Sign In for Tracker"
        buttonTitle="Sign In"
        onSubmit={(email,password)=>signIn({email,password})}
        errorMessage={state.errorMessage}
        />
        <LinkMaker
        linkText="Dont have account? Sign Up here!"
        onPress={()=>navigation.navigate('SignUp')}
        />
        </View>
    );
};

SignInScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:10
    }
})

export default SignInScreen;