import { StyleSheet, Text, View, Image } from 'react-native';

export default function Roster(props){
    return(
        <View style={styles.rosterContainer}>
            <Image source={require('../../assets/RC1png.png')} style={styles.img}/>
            <View style={styles.carDiv}>
                <Text style={{ fontWeight: 700}} >Nome: <Text style={{
                    fontWeight:500
                }}>{props.nome}</Text></Text>
                <Text style={{ fontWeight: 700}}>Idade: <Text style={{
                    fontWeight:500
                }}>{props.idade}</Text></Text>
                <Text style={{ fontWeight: 700}} >Altura: <Text style={{
                    fontWeight:500
                }}>{props.height}</Text></Text>
                <Text style={{ fontWeight: 700}}>Posição: <Text style={{
                    fontWeight:500
                }}>{props.func}</Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img:{
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    rosterContainer:{
        display: "flex",
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 15,
        marginLeft: 15,
    },
    carDiv:{
        display: "flex",
        justifyContent: 'space-between',
    },
})