import { Image, StyleSheet, Platform } from 'react-native';
//import { HelloWave } from '@/components/HelloWave';//
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const carros = [
  {
    id: 1,
    marca: 'Peugeot',
    modelo: '208',
    ano: 2021,
    cor: 'Branco',
    image: "https://imgs.search.brave.com/phPijogdZb1yQYJb2KQ4lGyPdv3LzPiqW_jyk_uP8kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXV0b28uY29tLmJy/L2ZvdG9zLzIwMjQv/Ny8xMjgwXzk2MC9w/ZXVnZW90XzIwOF8y/MDI1XzJfMjAwNzIw/MjRfNzk1MjlfMTI4/MF85NjAuanBn"
  },
  {
    id: 2,
    marca: 'Mitsubishi ',
    modelo: 'Lancer',
    ano: 2015,
    cor: 'Cinza',
    image: 'https://imgs.search.brave.com/w1zyRQpp4TNEC-TxHFOsnHIHUwlYSvYgH4BKwM4DYXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/dWhNdDNVUm14c2Rj/S2RRdVJUTnAwb1po/Z2p5ZWxxVW02U1RI/Y2V5RUFzbmcxLXNH/QnVBcTg2ekl4bWxI/YzRzeGh2cGxfdW11/UlFVR0lhNG1Xa2Zl/SFM2SkdLQTRoQWlV/RmozRk1iTUZVTXlt/YzZEZWRVMFYwX2pC/bzZxVm55U2tKYU5V/WjlkeGxSb19LL3Mx/NjAwLXJ3L01pdHN1/YmlzaGktTGFuY2Vy/LTIwMTUrKDMpLmpw/Zw'
  },
  {
    id: 3,
    marca: 'Jeep',
    modelo: 'Range Rover',
    ano: 2022,
    cor: 'Preto',
    image: 'https://imgs.search.brave.com/1Rcvku-juxK8O73Y4fz6XUssAkdDAEy9XdeElA472lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMjBm/N2R5bnV6ZGVlZy5j/bG91ZGZyb250Lm5l/dC9wZGttb3RvcnMv/NzMwNS9hbGJ1bS1B/bGJ1bS1kZS1MQU5E/LVJPVkVSLVJBTkdF/LVJPVkVSLUE2NTg3/LTYzMjljMjk2ZDA3/NmQuanBn'
  },
  {
    id: 4,
    marca: 'Ford',
    modelo: 'Mustang',
    ano: 2021,
    cor: 'Azul',
    image: 'https://imgs.search.brave.com/u0vji2-eHXin0YBPkW_Tt2STHqQKl3Xg35iGoVVjLY0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXV0b3BhcG8uY29t/LmJyL2JveC91cGxv/YWRzLzIwMjQvMDYv/MTAwODIxNTkvZm9y/ZC1tdXN0YW5nLWd0/LXBlcmZvcm1hbmNl/LTIwMjUtYXp1bC1m/cmVudGUtbGF0ZXJh/bC10cmFzZWlyYS1k/ZXRhbGhlcy0zLTcz/Mng0ODguanBn'
  }
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.text}></ThemedText>
        
      </ThemedView>
      {carros.map((carros) => (
        <ThemedView key={carros.id} style={styles.card}>
          <Image source={{ uri: carros.image }} style={styles.carrosImage} />
          <ThemedText type="subtitle" style={styles.text}>Marca: {carros.marca}</ThemedText>
          <ThemedText type="subtitle" style={styles.text}>Modelo: {carros.modelo}</ThemedText>
          <ThemedText type="subtitle" style={styles.text}>Ano: {carros.ano}</ThemedText>
          <ThemedText type="subtitle" style={styles.text}>Cor: {carros.cor}</ThemedText>
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  carrosImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  reactLogo: {
    height: 178,
    width: 290,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  text: {
    fontSize: 18,
    color: 'black', 
    marginBottom: 5,
  },
});