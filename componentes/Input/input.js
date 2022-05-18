import { TextInput, View, StyleSheet, Text, Image, StatusBar } from "react-native";
import { useState } from 'react';
import { TouchableOpacity } from "react-native-web";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'




export default function InputFunction({ navigation }) {

    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');

    function getData() {
        if (email != '' || pswd != '') {
            if (email == 'pedro' && pswd == 'pedro123') {
                navigation.navigate('LoginPage')
            }
            else {
                alert('Email or password incorrect')
            }
        }
        else{
            alert('Fill all the gaps')
        }
        setEmail('')
        setPswd('')
    }

    return (
        <View style={styles.mainContent}>
            <Image source={require('../../assets/Escudo-São-Paulo.png')} style={styles.img} />
            <StatusBar backgroundColor='red' barStyle='dark-content' />
            <TextInput
                placeholder={'Email...'}
                style={styles.input}
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <TextInput
                placeholder={'Password...'}
                style={styles.input}
                onChangeText={pswd => setPswd(pswd)}
                value={pswd}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={getData}><Text style={styles.text}>Logar</Text></TouchableOpacity>
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
        marginBottom: 25,
        color: 'red',
        height: 35,
    },
    mainContent: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
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
        textAlign: 'center',
    },
    img: {
        width: 350,
        height: 350,
        marginBottom: 25,
    }
})

