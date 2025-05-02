// In this component, I render pagination buttons based on the total number of pages from context.
import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';

function Footer() {
  const { currentPage, setCurrentPage, totalPages } = useContext(CharacterContext);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <footer className="bg-white shadow-inner text-center py-4 mt-8 flex flex-wrap justify-center gap-2">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded ${
            page === currentPage
              ? 'bg-green-500 text-white font-bold'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}
    </footer>
  );
}

export default Footer;
