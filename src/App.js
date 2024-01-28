import './App.css';
import { useState } from 'react';
import Movies from './Movies'

function App() {


  const [movies] = useState([
    {
      name: "Swordfish",
      year: "2001",
      rating: "R",
      image: "https://www.example.com/swordfish.png" 
    },
    {
      name: "Hobbs and Shaw",
      year: "2019",
      rating: "PG-13",
      image: "https://www.example.com/hobbsandshaw.png" 
    },
    {
      name: "John Wick 4",
      year: "2022",
      rating: "R",
      image: "https://www.example.com/johnwick4.png" 
    },
    {
      name: "Split Second",
      year: "1992",
      rating: "R",
      image: "https://www.example.com/splitsecond.png" 
    },
    {
      name: "Matrix",
      year: "1999",
      rating: "R",
      image: "https://www.example.com/matrix.png" 
    }
  ]);

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
