import { useEffect, useState } from 'react';
import './assets/css/core.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Home from './Components/Home';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import Admin from './Components/Admin';
import About from './Components/About';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import axios from 'axios';
export const serverurl = import.meta.env.VITE_server_url;
export const supabaseimg = import.meta.env.VITE_supabase_img;


function AppContent() {
  const location = useLocation();
  const hidebar = location.pathname === '/' || location.pathname === '/register';

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { isLogin } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      if (isLogin) {
        try {
          const response = await axios.get(serverurl + "/books", {
            withCredentials: true
          });
          setBooks(response.data);
          setFilteredBooks(response.data);
        } catch (error) {
          console.error('Error fetching books:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    filterBooks(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory, books]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filterBooks = (term, category) => {
    let filtered = books;

    if (term) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((book) => book.genre === category);
    }

    setFilteredBooks(filtered);
  };

  return (
    <div>
      {!hidebar && <Navbar onSearch={handleSearch} onCategory={handleCategory} />}
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path="/" element={<Signin />} />
        <Route path='/home' element={isLogin ? <Home search={searchTerm} category={selectedCategory} OnCategory={handleCategory} /> : <Navigate to={'/'} />} />
        <Route path="/cart" element={isLogin ? <Cart /> : <Navigate to={'/'} />} />
        <Route path="/about" element={isLogin ? <About /> : <Navigate to={'/'} />} />
        <Route path='/admin' element={isLogin ? <Admin /> : <Navigate to={'/'} />} />
      </Routes>
    </div>
  )
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
export default App;
