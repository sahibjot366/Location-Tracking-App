import React from "react";
import TrackerApi from "../apis/TrackerApi";
import createContexts from "../createContexts";
import { Navigator } from "../SetNavigator";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthReducer=(state,action)=>{
    switch(action.type){
        case 'removeError':
            return {...state,errorMessage:action.payload}
        case 'signout':
            return {...state,token:action.payload}
        case 'showError':
            return {...state,errorMessage:'error occured'}
        case 'signin':
            return {...state,token:action.payload}
        case 'signup':
            return {...state,token:action.payload}
        case 'checkForLogin':
            return {...state,token:action.payload}
    }
}

const signIn=dispatch=>async ({email,password})=>{
    try{
    const response=await TrackerApi.post('signin',{email,password});
    dispatch({type:'signin',payload:response.data.token});
    await AsyncStorage.setItem('token',response.data.token);
    Navigator('TrackList',{})
    }
    catch(err){
        dispatch({type:'showError'});
    }
}
const removeError=dispatch=>()=>{
    dispatch({type:'removeError',payload:null})
}
const checkForLogin=dispatch=>async ()=>{
    const token= await AsyncStorage.getItem('token');
    dispatch({type:'checkForLogin',payload:token});
    if(token){
        Navigator('TrackList',{})
    }
    else{
        Navigator('SignUp',{});
    }
}

const signOut=dispatch=>async ()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout',payload:''})
    Navigator('SignIn',{});
}
const signUp=dispatch=>async ({email,password})=>{
    try{
        const response=await TrackerApi.post('signup',{email,password});
        dispatch({type:'signup',payload:response.data.token})
        await AsyncStorage.setItem('token',response.data.token);
        Navigator('TrackList',{})
    }
    catch(err){
        dispatch({type:'showError'});
    }
}

export const  {Context,Provider}=createContexts(AuthReducer,{signIn,signUp,checkForLogin,signOut,removeError},{token:null,errorMessage:null});