import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, Dimensions } from 'react-native';
import { db, auth } from '../../../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import AnimeCard from '../../components/card/AnimeCard';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(user => {
      if (user) {
        fetchFavorites(user.uid);
      } else {
        setError('Faça login para ver seus favoritos');
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const fetchFavorites = async (userId) => {
    try {
      setLoading(true);
      setError('');
      
      const favoritesRef = collection(db, 'favorites', userId, 'userFavorites');
      
      // Usando onSnapshot para atualizações em tempo real
      const unsubscribeSnapshot = onSnapshot(favoritesRef, 
        (querySnapshot) => {
          const favs = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setFavorites(favs);
        },
        (error) => {
          console.error('Erro no listener:', error);
          setError(`Erro ao carregar favoritos: ${error.message}`);
          setLoading(false);
        }
      );

      return () => unsubscribeSnapshot();
    } catch (error) {
      console.error('Erro ao buscar favoritos:', {
        message: error.message,
        code: error.code,
        stack: error.stack
      });
      setError(`Falha ao carregar: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = async (anime) => {
    if (!auth.currentUser) {
      setError('Faça login para favoritar');
      return;
    }

    try {
      const userFavoritesRef = collection(
        db,
        'favorites',
        auth.currentUser.uid,
        'userFavorites'
      );

      // Verifica se já está favoritado
      const existingFavorite = favorites.find(fav => 
        fav.mal_id === anime.mal_id || fav.id === anime.id
      );

      if (existingFavorite) {
        // Remove dos favoritos
        await deleteDoc(doc(userFavoritesRef, existingFavorite.id));
      } else {
        // Adiciona aos favoritos
        await addDoc(userFavoritesRef, {
          ...anime,
          createdAt: serverTimestamp()
        });
      }
    } catch (error) {
      console.error('Erro ao favoritar:', error);
      setError(`Erro: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <NavBar />
      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : favorites.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum anime favoritado ainda</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id || item.mal_id?.toString()}
          renderItem={({ item }) => (
            <AnimeCard
              anime={{
                ...item,
                mal_id: item.mal_id || item.id,
                title: item.title || 'Título não disponível',
                year: item.year || 'Ano não disponível',
                posterUrl: item.posterUrl || 'https://via.placeholder.com/150x225?text=No+Poster',
                genres: item.genres || [],
              }}
              cardWidth={Dimensions.get('window').width - 20}
              onFavoritePress={() => handleFavorite(item)}
              isFavorite={true} // Todos os itens nesta lista são favoritos
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}