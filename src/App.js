import './App.css';
import { useState } from 'react';
import Movies from './Movies'

function App() {


  const [movies] = useState([
    {
      name: "Swordfish",
      year: "2001",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/61NJ9l5zr3L._AC_UF894,1000_QL80_.jpg" 
    },
    {
      name: "Hobbs and Shaw",
      year: "2019",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/I/71T8yuUfM3L._AC_UF894,1000_QL80_.jpg" 
    },
    {
      name: "John Wick 4",
      year: "2022",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/91NpGSlvlKL._AC_UF894,1000_QL80_.jpg" 
    },
    {
      name: "Split Second",
      year: "1992",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/81Hyr3ICifL._AC_UF894,1000_QL80_.jpg" 
    },
    {
      name: "Matrix",
      year: "1999",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/51DUmDryAvL._AC_UF894,1000_QL80_.jpg" 
    },
    {
      name: "Gone in 60 seconds",
      year: "2000",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/71ddRUjKM-S._AC_UF894,1000_QL80_.jpg" 
    },
    {
      name: "Witcher",
      year: "2019",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/91Xb2icuHFL._AC_UF894,1000_QL80_.jpg" 
    },
    {
      name: "Billions",
      year: "2016",
      rating: "R",
      image: "https://m.media-amazon.com/images/I/A1f84KOq4nL._AC_UF894,1000_QL80_.jpg" 
    },
  ]);

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
