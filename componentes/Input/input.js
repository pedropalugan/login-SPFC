import { TextInput, View, StyleSheet, Text, Image } from "react-native";
import { useState } from 'react';
import { TouchableOpacity } from "react-native-web";


export default function InputFunction(props){
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');
    function enviarDado(){
        console.log(email)
        console.log(pswd)
        setEmail('')
        setPswd('')
    }

    return(
        <View style={styles.mainContent}>
            <TextInput 
            placeholder={props.email}
            onChangeText={email => setEmail(email)}
            value={email}
            style={styles.input}
            />
            <TextInput 
            placeholder={props.pswd}
            onChangeText={pswd => setPswd(pswd)}
            value={pswd}
            style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={enviarDado}><Text style={styles.text}>{props.log}</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.25,
        borderColor: 'red',
        borderRadius: 5,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        marginBottom: 50,
        color: 'red',
        height: 35
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'red',
        paddingTop: 12.5,
    },
    text: {
        fontFamily: 'sans-serif',
        fontWeight: 600,
        fontSize: 20,
        color: "#FFF",
    },
    mainContent: {
        marginTop: 300,
    },
})

