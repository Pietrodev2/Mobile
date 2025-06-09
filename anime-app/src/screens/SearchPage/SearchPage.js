import React, { useState, useCallback } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Keyboard,
  Dimensions,
  TextInput,
  Text,
} from 'react-native';
import AnimeCard from '../../components/card/AnimeCard';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = useCallback(async (page = 1) => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setError('');
      return;
    }
    try {
      setLoading(true);
      Keyboard.dismiss();

      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}&page=${page}`
      );
      const data = await response.json();

      if (data.data?.length > 0) {
        setSearchResults(prev => page === 1 ? data.data : [...prev, ...data.data]);
        setTotalPages(data.pagination?.last_visible_page || 1);
        setError('');
      } else {
        setSearchResults([]);
        setError('Nenhum resultado encontrado');
      }
    } catch (error) {
      setError('Erro na conexão com o servidor');
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  const loadMoreResults = () => {
    if (currentPage < totalPages && !loading) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      handleSearch(nextPage);
    }
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar animes..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => {
            setCurrentPage(1);
            handleSearch(1);
          }}
          returnKeyType="search"
        />
      </View>

      {loading && <ActivityIndicator size="large" color="#3b82f6" style={styles.loader} />}

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.mal_id.toString()}
          renderItem={({ item }) => (
            <AnimeCard
              anime={{
                mal_id: item.mal_id,
                title: item.title,
                year: item.year || item.aired?.prop?.from?.year || 'N/A',
                posterUrl: item.images?.jpg?.image_url || 'https://via.placeholder.com/150x225?text=No+Poster',
                studio: item.studios?.map(s => s.name).join(', ') || 'N/A',
                synopsis: item.synopsis || 'Sinopse não disponível',
                genres: item.genres?.map(g => g.name) || [],
                duration: item.duration || 'N/A'
              }}
              cardWidth={Dimensions.get('window').width - 20}
            />
          )}
          contentContainerStyle={styles.listContainer}
          onEndReached={loadMoreResults}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            currentPage < totalPages && !loading ? (
              <ActivityIndicator size="small" color="#3b82f6" />
            ) : null
          }
        />
      ) : (
        !loading && <Text style={styles.emptyText}>Digite um termo para pesquisar animes</Text>
      )}
    </View>
  );
}