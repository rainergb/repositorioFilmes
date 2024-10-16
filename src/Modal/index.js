import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Detalhes(props){
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnBack} onPress={ props.voltar }>
                    <Text style={{color: '#fff', fontSize: 16}}> Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopes}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    btnBack: {
        backgroundColor: '#E52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    sinopes: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    descricao: {
        color: 'white',
        fontSize: 16,
        marginRight: 10,
        marginLeft: 10
    }
});