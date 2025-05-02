// In this file, I created a global context to manage characters, loading state, search, pagination, and filtered data across the app.
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCharacters = filteredCharacters.slice(startIndex, startIndex + itemsPerPage);

  return (
    <CharacterContext.Provider
      value={{
        characters: paginatedCharacters,
        loading,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };
