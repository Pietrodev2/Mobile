const BASE_URL = 'https://api.jikan.moe/v4';


export const fetchAnimes = async (page = 1, searchTerm = 'naruto') => {
  try {
    const response = await fetch(
      `${BASE_URL}/anime?q=${searchTerm}&page=${page}`
    );
    const data = await response.json();

    if (!data.data) return [];

    return data.data.map((anime) => ({
      mal_id: anime.mal_id,
      title: anime.title,
      year: anime.year || anime.aired?.prop?.from?.year || 'N/A',
      posterUrl: anime.images?.jpg?.image_url || 'https://via.placeholder.com/150x225?text=No+Image',
      runtime: anime.duration || 'N/A',
      director: anime.studios?.map((s) => s.name).join(', ') || 'N/A',
      genres: anime.genres?.map((g) => g.name) || [],
      actors: 'N/A',
      plot: anime.synopsis || '',
    }));
  } catch (error) {
    console.error('Erro ao buscar animes:', error);
    throw error;
  }
};

/**
 * fetchTotalPages - retorna número total de páginas para busca
 */
export const fetchTotalPages = async (searchTerm = 'naruto') => {
  const response = await fetch(`${BASE_URL}/anime?q=${searchTerm}`);
  const data = await response.json();
  return data.pagination?.last_visible_page || 1;
};
