// React component that renders a styled character card with image, name, status, species, and location.
function CharacterCard({ character }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 text-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{character.name}</h2>
        <p className="text-sm text-gray-600 mb-1">
          {character.status} - {character.species}
        </p>
        <p className="text-sm text-gray-500">Ubicación: {character.location.name}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
