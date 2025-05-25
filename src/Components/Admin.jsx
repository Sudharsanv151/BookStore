import { useState } from 'react';
import { bookCollection } from './BookCollections';

const Admin = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    imageUrl: '',
    overview: '',
    stockAvailability: '',
    language: '',
    genre: '',
    format: '',
    publisher: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., save to database or state)
    handleAdmin(book);
    function handleAdmin(data){
        if (bookCollection[data.genre]) {
        bookCollection[data.genre].push(data);
        } else {
        bookCollection[data.genre] = [data];
        }
        console.log(data);
    }
    console.log('Book Details:', book);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">Add a New Book</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter book title"
          value={book.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Author</label>
        <input
          type="text"
          name="author"
          placeholder="Enter author name"
          value={book.author}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          placeholder="Enter book description"
          value={book.description}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter book price"
          value={book.price}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter image URL"
          value={book.imageUrl}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Overview</label>
        <textarea
          name="overview"
          placeholder="Enter book overview"
          value={book.overview}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Stock Availability</label>
        <input
          type="text"
          name="stockAvailability"
          placeholder="Enter stock availability"
          value={book.stockAvailability}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Language</label>
        <input
          type="text"
          name="language"
          placeholder="Enter language"
          value={book.language}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Genre</label>
        <input
          type="text"
          name="genre"
          placeholder="Enter genre"
          value={book.genre}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Format</label>
        <input
          type="text"
          name="format"
          placeholder="Enter format"
          value={book.format}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Publisher</label>
        <input
          type="text"
          name="publisher"
          placeholder="Enter publisher"
          value={book.publisher}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Book
      </button>
    </form>
  );
};

export default Admin;
