import React from "react";
// Import the CSS file

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "A novel about the American dream and the roaring 1920s.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "A dystopian novel about a totalitarian regime and surveillance.",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    description: "A story of racial injustice and moral growth in the Deep South.",
  },
  {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "A philosophical book about destiny and following one's dreams.",
  },
];

const BookList = () => {
  return (
    <div className="container">
      <h1 className="title"> Explore Our Books</h1>
      <div className="grid">
        {books.map((book) => (
          <div key={book.id} className="card">
            <img src={book.image} alt={book.title} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{book.title}</h3>
              <p className="card-author">by {book.author}</p>
              <p className="card-description">{book.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
