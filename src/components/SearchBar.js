import React, { useState } from "react";

// Predefined genres for selection
const genres = ["Fiction", "Fantasy", "Non-Fiction", "Mystery", "Science Fiction"];

const SearchBar = ({ onSearch }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div className="flex flex-col items-center space-y-4">
      <select
        className="p-3 border border-gray-300 rounded-md w-80 text-lg"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Select a Genre</option>
        {genres.map((genre) => (
          <option key={genre} value={genre.toLowerCase()}>
            {genre}
          </option>
        ))}
      </select>

      <button
        onClick={() => onSearch(selectedGenre)}
        className="px-6 py-3 bg-blue-500 text-white rounded-md"
      >
        Get Recommendations
      </button>
    </div>
  );
};

export default SearchBar;
