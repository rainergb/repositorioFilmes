import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from "../Modal";

export default function Filmes({ data }){
    const [visibleModal, setVisibleModal] = useState(false);


    return(
        <View>

            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>
                <Image 
                    source={{ uri: data.foto }}
                    style={styles.capa}
                />
                <View style={styles.areaBtn}>
                    <TouchableOpacity style={styles.btn} onPress={ () => setVisibleModal(true) }>
                        <Text style={styles.btnTxt}> LEIA MAIS </Text>
                    </TouchableOpacity>
                </View>
                <Modal transparent={true} animationType="slide" visible={visibleModal}>
                    <Detalhes filme={data} voltar={ () => setVisibleModal(false)}/>
                </Modal>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    titulo: {
        padding: 15,
        fontSize: 20,
        color: 'black'
    },
    areaBtn: {
        alignItems: 'flex-end',
        marginTop: -50,
        zIndex: 5
    },
    btn: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    btnTxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    }
});