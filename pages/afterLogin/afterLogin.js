import { StyleSheet, Text, View, Image } from 'react-native';
import Roster from '../roster/roster';

export default function LoginPage(){
    return(
    <View style={styles.mainPart}>
        <View style={styles.imgTxt}>
            <Text style={styles.title}>São Paulo Futebol Clube</Text>
            <Image source={require('../../assets/Escudo-São-Paulo.png')} style={styles.img}/>
        </View>
        <View style={styles.rosterContent}>
        <Roster 
        nome='Rogério Ceni'
        idade='49'
        height='1.88 m'
        func='Técnico'
        />
        <Roster 
        nome='Rogério Ceni'
        idade='49'
        height='1.88 m'
        func='Técnico'
        />
        <Roster 
        nome='Rogério Ceni'
        idade='49'
        height='1.88 m'
        func='Técnico'
        />
        <Roster 
        nome='Rogério Ceni'
        idade='49'
        height='1.88 m'
        func='Técnico'
        />
        <Roster 
        nome='Rogério Ceni'
        idade='49'
        height='1.88 m'
        func='Técnico'
        />
        <Roster 
        nome='Rogério Ceni'
        idade='49'
        height='1.88 m'
        func='Técnico'
        />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 600,
        fontSize: 20,
        marginTop: 30,
        color: '#fff',
        marginLeft: 15,
    },
    img:{
        height: 100,
        width: 100,
    },
    imgTxt:{
        display:'flex',
        flexDirection:'row',
        justifyContent: "space-between",
        backgroundColor: '#000',
        margin: 0,
    },
    rosterContent:{
        display: 'flex',
        justifyContent: "space-between",
    }
})
