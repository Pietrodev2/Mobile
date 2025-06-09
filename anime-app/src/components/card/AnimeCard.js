console.log("HomePage carregada");

import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import { db, auth } from '../../../firebaseConfig';
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';
import styles from './styles';

export default function AnimeCard({ anime, cardWidth }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const animeData = {
    mal_id: anime.mal_id?.toString() || '',
    title: anime.title || 'Título desconhecido',
    year: anime.year || anime.aired?.prop?.from?.year || 'N/A',
    posterUrl: anime.posterUrl || anime.images?.jpg?.image_url || 'https://via.placeholder.com/150x225?text=No+Poster',
    director: anime.director || 'Desconhecido',
    actors: anime.actors || 'N/A',
    plot: anime.synopsis || 'Sinopse não disponível',
    genres: anime.genres?.map((g) => g.name) || [],
    runtime: anime.episodes ? `${anime.episodes} episódios` : 'N/A',
  };

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        if (!auth?.currentUser) return;
        const favoriteRef = doc(
          db,
          'favorites',
          auth.currentUser.uid,
          'userFavorites',
          animeData.mal_id
        );
        const docSnap = await getDoc(favoriteRef);
        setIsFavorite(docSnap.exists());
      } catch (error) {
        console.error('Erro ao verificar favorito:', error);
      }
    };
    checkFavoriteStatus();
  }, [animeData.mal_id]);

  const toggleFavorite = async () => {
    if (!auth?.currentUser) {
      Alert.alert('Atenção', 'Faça login para adicionar aos favoritos!');
      return;
    }

    const favoriteRef = doc(
      db,
      'favorites',
      auth.currentUser.uid,
      'userFavorites',
      animeData.mal_id
    );

    try {
      const snapshot = await getDoc(favoriteRef);

      if (snapshot.exists()) {
        await deleteDoc(favoriteRef);
        setIsFavorite(false);
      } else {
        await setDoc(favoriteRef, {
          ...animeData,
          userId: auth.currentUser.uid,
          timestamp: new Date(),
        });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Erro ao salvar/remover favorito:', error);
      Alert.alert('Erro', 'Não foi possível atualizar os favoritos.');
    }
  };

  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.card}
        activeOpacity={0.8}
      >
        <Image
          source={{ uri: animeData.posterUrl }}
          style={[styles.poster, { height: cardWidth * 1.5 }]}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={[
            styles.favoriteButton,
            isFavorite ? { backgroundColor: 'red' } : { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
          ]}
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? '⭐️' : '⭐️'}</Text>
        </TouchableOpacity>

        <Text style={styles.movieTitle} numberOfLines={1}>
          {animeData.title} ({animeData.year})
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContent,
              { width: screenWidth * 0.9, maxHeight: screenHeight * 0.8 },
            ]}
          >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Image
                source={{ uri: animeData.posterUrl }}
                style={styles.posterExpandido}
                resizeMode="cover"
              />

              <Text style={styles.movieTitleExpandido}>
                {animeData.title} ({animeData.year})
              </Text>

              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Episódios:</Text>
                <Text style={styles.detailsValue}>{animeData.runtime}</Text>
              </View>

              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Gêneros:</Text>
                <Text style={styles.detailsValue}>
                  {animeData.genres.join(', ') || 'N/A'}
                </Text>
              </View>

              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Sinopse:</Text>
                <Text style={styles.plotText}>{animeData.plot}</Text>
              </View>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}