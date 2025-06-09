console.log("HomePage carregada");

import React, { useState } from 'react';
import { ScrollView, View, ActivityIndicator, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useFonts, Inter_300Light, Inter_700Bold } from '@expo-google-fonts/inter';
import { useAnimes } from '../../hooks/useAnimes/useAnimes';

import AnimeCard from '../../components/card/AnimeCard';;

import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function HomePage() {
  const [fontsLoaded] = useFonts({
    'Inter-Light': Inter_300Light,
    'Inter-Bold': Inter_700Bold,
  });

  const [page, setPage] = useState(1);
  const { animes, loading, totalPages } = useAnimes(page, 'naruto');

  const getPageNumbers = () => {
    const visiblePages = 5;
    let start = Math.max(page - Math.floor(visiblePages / 2), 1);
    let end = start + visiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - visiblePages + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const screenWidth = Dimensions.get('window').width;

  if (!fontsLoaded || loading) {
    return <ActivityIndicator size="large" color="#3b82f6" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView style={styles.content}>
        <View style={styles.listContainer}>
          {animes.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              cardWidth={screenWidth - 20}
            />
          ))}
        </View>

        <View style={styles.pagination}>
          {page > 1 && (
            <TouchableOpacity onPress={() => setPage(page - 1)}>
              <Text style={styles.pageButton}>⬅</Text>
            </TouchableOpacity>
          )}

          {getPageNumbers().map((p) => (
            <TouchableOpacity key={p} onPress={() => setPage(p)}>
              <Text style={[styles.pageNumber, p === page && styles.currentPage]}>
                {p}
              </Text>
            </TouchableOpacity>
          ))}

          {page < totalPages && (
            <TouchableOpacity onPress={() => setPage(page + 1)}>
              <Text style={styles.pageButton}>➡</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
