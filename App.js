import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import StartUpScreen from "./src/screens/StartUpScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignOutScreen from "./src/screens/SignOutScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import CreateTrackScreen from "./src/screens/CreateTrackScreen";
import { Provider as AuthProvider } from "./src/Contexts/AuthContext";
import { SetNavigator } from "./src/SetNavigator";
import { Provider as LocationProvider } from "./src/Contexts/LocationContext";
const navigator=createSwitchNavigator({
  Start:StartUpScreen,
  LoginFlow:createStackNavigator({
      SignUp:SignUpScreen,
      SignIn:SignInScreen
    })
  ,
  MainFlow:createBottomTabNavigator({
    TrackListFlow:createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetails:TrackDetailsScreen
    }),
    CreateTrack:CreateTrackScreen,
    SignOut:SignOutScreen
  })
},{
  initialRouteName:'Start'
})

const App=createAppContainer(navigator);
export default ()=>{
  return (
    <LocationProvider>
    <AuthProvider>
      <App ref={navigator=>SetNavigator(navigator)} />
    </AuthProvider>
    </LocationProvider>
  )
}