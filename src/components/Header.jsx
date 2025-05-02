import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';

function Header() {
  const { search, setSearch } = useContext(CharacterContext);

  return (
    <header className="bg-white shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-6xl">
      <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight text-center md:text-left">
        Rick and Morty App
      </h1>

      <div className="relative w-full max-w-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Buscar personaje..."
          className="w-full bg-gray-100 border border-gray-300 rounded-full py-4 pl-14 pr-6 text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-md"
        />
        <svg
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="28"
          height="28"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
