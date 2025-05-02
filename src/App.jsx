import { useContext, useState, useEffect } from 'react';
import { CharacterContext } from './context/CharacterContext';
import CharacterCard from './components/CharacterCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { characters, loading } = useContext(CharacterContext);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // Espera 2 segundos antes de quitar el overlay
      const timer = setTimeout(() => setShowLoading(false), 1000);
      return () => clearTimeout(timer); // limpia si desmonta antes
    }
  }, [loading]);

  if (showLoading) {
    return (
      <div className="overlay">
        <img src="/icon.png" alt="Cargando" className="spinner" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col items-center justify-between">
      <Header />

      {characters.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No se encontraron personajes.</p>
      ) : (
        <main className="flex justify-center items-center flex-1 p-8 w-full">
          <div className="grid grid-cols-2 gap-12 max-w-4xl w-full justify-items-center content-center">
            {characters.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
