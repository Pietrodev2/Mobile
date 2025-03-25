import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import Card from "./components/card";

const carros = [
  {
    id: 1,
    marca: "Peugeot",
    modelo: "208",
    ano: 2021,
    cor: "Branco",
    preco: 75000,
    avaliacao: 4.3,
    image:
      "https://imgs.search.brave.com/phPijogdZb1yQYJb2KQ4lGyPdv3LzPiqW_jyk_uP8kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXV0b28uY29tLmJy/L2ZvdG9zLzIwMjQv/Ny8xMjgwXzk2MC9w/ZXVnZW90XzIwOF8y/MDI1XzJfMjAwNzIw/MjRfNzk1MjlfMTI4/MF85NjAuanBn",
  },
  {
    id: 2,
    marca: "Mitsubishi",
    modelo: "Lancer",
    ano: 2015,
    cor: "Cinza",
    preco: 68000,
    avaliacao: 4.5,
    image:
      "https://imgs.search.brave.com/w1zyRQpp4TNEC-TxHFOsnHIHUwlYSvYgH4BKwM4DYXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/dWhNdDNVUm14c2Rj/S2RRdVJUTnAwb1po/Z2p5ZWxxVW02U1RI/Y2V5RUFzbmcxLXNH/QnVBcTg2ekl4bWxI/YzRzeGh2cGxfdW11/UlFVR0lhNG1Xa2Zl/SFM2SkdLQTRoQWlV/RmozRk1iTUZVTXlt/YzZEZWRVMFYwX2pC/bzZxVm55U2tKYU5V/WjlkeGxSb19LL3Mx/NjAwLXJ3L01pdHN1/YmlzaGktTGFuY2Vy/LTIwMTUrKDMpLmpw/Zw",
  },
  {
    id: 3,
    marca: "Range Rover",
    ano: 2022,
    cor: "Preto",
    preco: 150000,
    avaliacao: 4.8,
    image:
      "https://imgs.search.brave.com/1Rcvku-juxK8O73Y4fz6XUssAkdDAEy9XdeElA472lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMjBm/N2R5bnV6ZGVlZy5j/bG91ZGZyb250Lm5l/dC9wZGttb3RvcnMv/NzMwNS9hbGJ1bS1B/bGJ1bS1kZS1MQU5E/LVJPVkVSLVJBTkdF/LVJPVkVSLUE2NTg3/LTYzMjljMjk2ZDA3/NmQuanBn",
  },
  {
    id: 4,
    marca: "Ford",
    modelo: "Mustang",
    ano: 2021,
    cor: "Azul",
    preco: 580000,
    avaliacao: 4.9,
    image:
      "https://imgs.search.brave.com/u0vji2-eHXin0YBPkW_Tt2STHqQKl3Xg35iGoVVjLY0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXV0b3BhcG8uY29t/LmJyL2JveC91cGxv/YWRzLzIwMjQvMDYv/MTAwODIxNTkvZm9y/ZC1tdXN0YW5nLWd0/LXBlcmZvcm1hbmNl/LTIwMjUtYXp1bC1m/cmVudGUtbGF0ZXJh/bC10cmFzZWlyYS1k/ZXRhbGhlcy0zLTcz/Mng0ODguanBn",
  },
  {
    id: 5,
    marca: "Fiat",
    modelo: "Fastback Abarth",
    ano: 2025,
    cor: "Preto",
    preco: 280000,
    avaliacao: 5,
    image:
      "https://alpes-hub.s3.amazonaws.com/uploads/public/654/26b/740/65426b740f722621825618.png",
  },

  {
    id: 6,
    marca: "BYD",
    modelo: "Seal",
    ano: 2025,
    cor: "Preto",
    preco: 480000,
    avaliacao: 5,
    image:
      "https://img.odcdn.com.br/wp-content/uploads/2024/06/byd-seal-scaled.jpg",
  },
];

export default function App() {
  const [cardsExpandidos, setCardsExpandidos] = useState({});

  const toggleExpandirCard = (id) => {
    setCardsExpandidos((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Carros Disponíveis</Text>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card carro={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#000",
    fontFamily: "Inter_400Regular",
  },
});
