import React from "react";
import { GiBookmarklet } from "react-icons/gi";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {books.length === 0 ? (
        <p className="text-gray-500 text-center italic">No recommendations yet. Start searching!</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="p-4 border border-yellow-500 rounded-lg bg-white shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-yellow-400">
              <GiBookmarklet className="inline mr-2" />
              {book}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              A magical addition to your reading list! ✨
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
