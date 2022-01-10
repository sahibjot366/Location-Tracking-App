import React,{useState} from "react";
import { StyleSheet,View} from "react-native";
import { Input, Text,Button} from "react-native-elements";
const Authentication=({headerText,buttonTitle,onSubmit,errorMessage})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return (
        <>
        <Text h2 style={{marginBottom:40}}>{headerText}</Text>
        <Input 
        style={styles.marginAllElements}
        value={email} 
        label="E-mail"
        onChangeText={newEmail=>setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        />
        <Input 
        style={styles.marginAllElements}
        value={password}
        secureTextEntry
        label="Password"
        onChangeText={newPassword=>setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        />
        {errorMessage!=null ? <Text style={styles.errorTextStyle}>{errorMessage}</Text> : null}
        <Button 
        style={styles.marginAllElements}
        title={buttonTitle}
        onPress={()=>onSubmit(email,password)}
        />
        </>
    )
}

const styles=StyleSheet.create({
    
    marginAllElements:{
        marginVertical:5
    },
    errorTextStyle:{
        color:'red',
        marginVertical:4
    }
})

export default Authentication;