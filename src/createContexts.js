import React,{Children, useContext,useReducer} from "react";

export default (reducer,actions,initialState)=>{
    const Context=React.createContext();
    const Provider=({children})=>{
        
        const [state,dispatch]=useReducer(reducer,initialState);
        const actionFunctions={};
        for(let action in actions){
            actionFunctions[action]=actions[action](dispatch);
        }
        return (
            <Context.Provider value={{state,...actionFunctions}}>
                {children}
            </Context.Provider>
        )
    }
    return {Context,Provider};
}