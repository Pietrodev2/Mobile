import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function CardInterior({ item }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpandido(!expandido)} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.cardText}>{item.modelo}</Text>
      {expandido && (
        <View style={styles.detalhes}>
          <Text style={styles.detailsText}>{item.descricao}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#00BCD4', 
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  cardText: {
    fontSize: 16,
    color: '#FFFFFF', 
    fontWeight: "bold"
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8
  },
  detalhes: {
    marginTop: 8,
    backgroundColor: '#00ACC1', 
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  detailsText: {
    color: '#FFFFFF', 
  }
});
