import { StyleSheet, Text, View, Image, FlatList } from 'react-native';



const interiores = [
    {
      id: 1,
      modelo: "Peugeot 208",
      descricao: "O interior do Peugeot 208 combina tecnologia e sofisticação com seu painel digital e acabamentos refinados.",
      image: "https://imgs.search.brave.com/sw7IDeRG6fGhi3Z6tmtsRrK-2aadplJlJ7k_klo4oRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXV0b3BhcG8uY29t/LmJyL2JveC91cGxv/YWRzLzIwMjQvMDkv/MDYyMDI5NTQvcGV1/Z2VvdC0yMDgtMjAy/NS1pbnRlcmlvci5q/cGVn"
    },
    {
      id: 2,
      modelo: "Mitsubishi Lancer",
      descricao: "O Lancer oferece um interior esportivo com bancos confortáveis e um painel voltado para o motorista.",
      image: "https://imgs.search.brave.com/WkvCIp8QYPHx1c5J6oT-JxB8DCQFKHlGJbRBlq6rk9M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vn/WWg2ZUpIcU9JVklC/UkExU3FMSXV4SEp1/dC13V0hueS1vZU43/SzYybUNHWlBpNjUt/ZG5wbUJIVXlRcU01/RklFaUgza2RWUDlP/XzBnWG5HLW56dnQ3/YmZVM3k5U2ptQjlE/aXNUSEpJTWJqcXIx/Zm94U1NGT2kwdTFf/c3BFeEFCN2E1bUZf/emkxR2VaNGNfL3M2/NDAtcncvTWl0c3Vi/aXNoaS1MYW5jZXIt/SEwtMjAxOCslMjgx/JTI5LmpwZw"
    },
    {
      id: 3,
      modelo: "Range Rover",
      descricao: "Luxo e tecnologia definem o interior da Range Rover, com acabamentos em couro e um sistema multimídia moderno.",
      image: "https://imgs.search.brave.com/k7ie4CAomzrRmV8ba4xuFf3HwLu3fB3j2R935X83VIk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qbHIu/c2NlbmU3LmNvbS9p/cy9pbWFnZS9qbHIv/TDQ2MF9JbnRfR2Fs/XzI"
    },
    {
      id: 4,
      modelo: "Ford Mustang",
      descricao: "O Mustang tem um design clássico com um toque moderno, contando com iluminação ambiente e cockpit esportivo.",
      image: "https://imgs.search.brave.com/kNxyxuBiTmI5UaeJ-3hgOFBOs0iZOBvPvVV3ZepZvp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUw/NTYwNDYwL3Bob3Rv/L2ZvcmQtbXVzdGFu/Zy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9T2xVaVk4U05y/aEh5NktSMEt5RmdD/N1ZPb2l1YTkyZ0x5/NVpFN2NfTDZvVT0"
    },
    {
      id: 5,
      modelo: "Fiat Fastback Abarth",
      descricao: "O Fastback Abarth oferece um interior dinâmico, com detalhes esportivos e um volante multifuncional.",
      image: "https://imgs.search.brave.com/rMFsa0lG3RMtrsa_fif7HuKymvEyrZAUame5gqLb9CU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wMi50/cnJzZi5jb20vaW1h/Z2UvZmdldC9jZi83/NzQvMC9pbWFnZXMu/dGVycmEuY29tLzIw/MjMvMTAvMjYvZmFz/dGJhY2tfYWJhcnRo/XzA0NC1yaG94cm9o/MGJjZGkuanBn"
    },
    {
      id: 6,
      modelo: "BYD Seal",
      descricao: "O interior do BYD Seal traz um design futurista, com painel digital e acabamentos premium.",
      image: "https://imgs.search.brave.com/YrxRTKN9_hwJDpHcDRrcToe2FPrXf0QjvU6zyozL9X4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnlkLmNvbS9jb250/ZW50L2RhbS9ieWQt/c2l0ZS9ici9wcm9k/dWN0L2J5ZC1zZWFs/L3BjL2ludGVyaW9y/LmpwZw"
    }
  ];
  

export default function InteriorsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Interiores dos Carros</Text>
            <FlatList
                data={interiores}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text sAtyle={styles.cardText}>{item.modelo}</Text>
                        <Text style={styles.description}>{item.descricao}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ADD8E6",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 16,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#000",
    },
    card: {
        backgroundColor: "#00BCD4", // Cor ciano igual ao app
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        width: 320,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#FFFFFF",
        textAlign: "center",
    },
});
