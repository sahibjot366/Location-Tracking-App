import React from "react";
import { requestForegroundPermissionsAsync,watchPositionAsync,Accuracy } from 'expo-location';
import { useEffect,useState } from "react";
export default (shouldTrace,callback)=>{
    const [err,setErr]=useState(null);
    const [sub,setSub]=useState(null);
       useEffect(()=>{
        
        const startWatching= async ()=>{
            try{
               const {granted}=await requestForegroundPermissionsAsync();
               if(!granted){
                   throw new Error('Location permission not granted');
               }
               const subscriber= await watchPositionAsync(
                   {
                       accuracy:Accuracy.BestForNavigation,
                       timeInterval:1000,
                       distanceInterval:100
                   },
                   callback
               );
               setSub(subscriber);
            }
            catch(err){
               setErr(err);
            }
           }
           if(shouldTrace){
               console.log("Focussed")
            startWatching();
           }
           else{
               console.log("Not Foccused")
               sub.remove();
            setSub(null);
           }
       },[shouldTrace,callback])
       return [err];
}