import createContexts from '../createContexts';

const LocationReducer=(state,action)=>{
    switch(action.type){
        case 'updateCurrLocation':
            return {...state,currlocation:action.payload};
        case 'startRecording':
            return {...state,isRecording:true}
        case 'stopRecording':
            return {...state,isRecording:false}
        default:
            return state;
    }
}


const updateLocation=dispatch=>(isRecording,location)=>{
    dispatch({type:'updateCurrLocation',payload:location})
    if(isRecording){
        console.log('Recording is on')
    }
    else{
        console.log('recording is off')
    }
    // console.log(location);
}
const startRecording=dispatch=>()=>{
    dispatch({type:'startRecording'});
}
const stopRecording=dispatch=>()=>{
    dispatch({type:'stopRecording'});
}
export const {Context,Provider}=createContexts(LocationReducer,{updateLocation,startRecording,stopRecording},{isRecording:false,currlocation:null,locations:[]})