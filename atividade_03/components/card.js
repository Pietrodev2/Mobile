import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

export default function Card({ carro }) {
    const [expandido, setExpandido] = useState(false);

    return (
        <TouchableOpacity onPress={() => setExpandido(!expandido)} style={styles.card}>
            <Image source={{ uri: carro.image }} style={styles.image} />
            <Text style={styles.cardText}>{carro.marca} {carro.modelo}</Text>
            {expandido && (
                <View style={styles.detalhes}>
                    <Text style={styles.detailsText}>Ano: {carro.ano}</Text>
                    <Text style={styles.detailsText}>Cor: {carro.cor}</Text>
                    <Text style={styles.detailsText}>Preço: R${carro.preco.toLocaleString('pt-BR')}</Text>
                    <Text style={styles.detailsText}>Avaliação: {carro.avaliacao}☆</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#00BCD4', // Cor ciano
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        width: 300,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Sombra para Android
    },
    cardText: {
        fontSize: 16,
        color: '#FFFFFF', // Texto branco para contraste
        fontFamily: 'Inter_400Regular',
        fontWeight: "bold"
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8
    },
    detalhes: {
        marginTop: 8,
        backgroundColor: '#00ACC1', // Tom um pouco mais escuro de ciano para contraste
        padding: 10,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center'
    },
    detailsText: {
        fontFamily: 'Inter_400Regular',
        color: '#FFFFFF', // Texto branco para melhor visibilidade
    }
});
