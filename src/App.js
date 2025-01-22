import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import { Button } from "./components/ui/button";
import { BsSun, BsMoon, BsMagic } from "react-icons/bs";
import { GiSpellBook, GiMagicPortal } from "react-icons/gi";

function App() {
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState("");

  // Fantasy-themed quotes
  const quotes = [
    "Not all those who wander are lost. – J.R.R. Tolkien",
    "The world is full of magic things, patiently waiting for our senses to grow sharper. – W.B. Yeats",
    "A reader lives a thousand lives before he dies. – George R.R. Martin",
  ];

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const fetchRecommendations = async (genre) => {
    if (!genre) {
      alert("Please select a genre!");
      return;
    }

    try {
      const response = await fetch(`https://YOUR_API_GATEWAY_URL?genre=${genre}`);
      if (!response.ok) {
        throw new Error("Failed to fetch recommendations");
      }
      const data = await response.json();
      setBooks(data.recommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      alert("Error fetching recommendations. Please try again later.");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532012197267-da84d127e765?fit=crop&w=1600&h=900&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Dark Mode Toggle Button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 shadow-lg"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BsSun size={24} color="white" /> : <BsMoon size={24} color="black" />}
        </button>

        <h1
          className="text-5xl font-extrabold text-yellow-500 dark:text-yellow-300 mb-6"
          style={{ fontFamily: "'Uncial Antiqua', cursive" }}
        >
          <GiSpellBook className="inline mr-3" /> Magic Book Finder
        </h1>
        <p className="text-lg text-white dark:text-yellow-300 italic mb-4 font-bold shadow-lg bg-black bg-opacity-50 p-2 rounded-md">
          "{quote}"
        </p>

        {/* Render the SearchBar component */}
        <SearchBar onSearch={fetchRecommendations} />

        {/* Book list display */}
        <div className="text-lg text-white dark:text-yellow-300 italic mb-4 font-bold shadow-lg bg-black bg-opacity-50 p-2 rounded-md">
          {books.length === 0 ? "No recommendations yet. Start searching!" : <BookList books={books} />}
        </div>

        {/* Example button to fetch Fantasy recommendations */}
        <Button
          onClick={() => fetchRecommendations("fantasy")}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg hover:from-indigo-500 hover:to-purple-600 transition-all"
        >
          <GiMagicPortal className="inline mr-2" />
          Get Fantasy Recommendations
        </Button>
      </div>
    </div>
  );
}

export default App;
