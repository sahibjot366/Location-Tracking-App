import {NavigationActions} from 'react-navigation';

let navigator;

export const SetNavigator=nav=>{
    navigator=nav;
}

export const Navigator=(routeName,params)=>{
   navigator.dispatch(
       NavigationActions.navigate({
           routeName,
           params
       })
   )
}