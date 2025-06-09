import { useState, useEffect } from 'react';
import { fetchAnimes, fetchTotalPages } from '../../services/api';

export const useAnimes = (page = 1, searchTerm = 'naruto') => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [animeData, total] = await Promise.all([
          fetchAnimes(page, searchTerm),
          fetchTotalPages(searchTerm)
        ]);
        setAnimes(animeData);
        setTotalPages(total);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page, searchTerm]);

  return { animes, loading, totalPages };
};
