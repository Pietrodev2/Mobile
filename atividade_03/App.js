import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image } from "react-native"; 
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "./components/card";
import CardInterior from "./components/CardInterior";

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
      "https://imgs.search.brave.com/pqXnrFWBdGWIxLaUILAHcZbhmk-SCyJTPs7WohHqWcA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9k/dWN0aW9uLmF1dG9m/b3JjZS5jb20vdXBs/b2Fkcy9waWN0dXJl/L2ltYWdlLzI2MzY0/ODUwNS91c2VkX21v/ZGVsX3dlYnBfY29t/cHJhci1mYXN0YmFj/ay0xLTMtdHVyYm8t/MjcwLWZsZXgtYWJh/cnRoLWF0Ni0yMDI1/LTIxMzJfOTk1Njg5/YThkZC5qcGcud2Vi/cA",
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

const HomeScreen = () => {
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
};

const InteriorsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interiores dos Carros</Text>
      <FlatList
        data={interiores} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardInterior item={item} /> 
        )}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Início") {
              iconName = "home-outline";
            } else if (route.name === "Interiores") {
              iconName = "business-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#E0F7FA",
          tabBarStyle: {
            backgroundColor: "#00BCD4",
            paddingBottom: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: "#00BCD4",
          },
          headerTintColor: "#FFFFFF",
          headerTitleAlign: "center",
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Interiores" component={InteriorsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

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
    marginBottom: 32,
    color: "#000",
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  carInfo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  carImage: {
    width: 300,
    height: 200,
    marginTop: 10,
    borderRadius: 8,
  },
});