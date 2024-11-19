

import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieForm from './MoviefFrom'; // Ensure MovieForm is imported only once
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The school for good and evil',
      description: 'A fantasy adventure based on the book series, where two friends are sent to a magical school that trains heroes and villains. Sophie ends up in the School for Evil, while Agatha is placed in the School for Good. They must navigate their mismatched fates while discovering what it truly means to be good or evil.',
      posterURL: "https://cdn.webshopapp.com/shops/70489/files/416034765/600x600x3/image.jpg",
      rating: 8.5,
    },
    {
      id: 2,
      title: 'Maleficent',
      description: 'As a child she was a good-hearted protector to the Moors. After being betrayed by her first and only love, Maleficent',
      posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_payoff-18191_8c0c935b.jpeg",
      rating: 6.9,
    },
    {
      id: 3,
      title:'One Shte',
      description: "An action-packed thriller about a Navy SEAL team that must fight to survive during a high-stakes mission. Set in real-time, the film showcases intense combat and strategy as the team tries to protect critical information while being attacked by insurgents.",
      posterURL: "https://fr.web.img3.acsta.net/pictures/21/08/05/18/01/5652597.jpg",
      rating: 8.0,
    },
    {
      id: 4,
      title: 'Viking',
      description: 'This historical drama follows the epic and brutal life of a Viking warrior. The film explores the harsh world of Norse seafarers as they battle for survival and seek conquest in a hostile environment.',
        posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DHgDHC3bPBznNQYIY-77U4KKGZ-VCpDqEg&s',
        rating: 8.0
    }, 
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...movies, { id: Date.now(), ...newMovie }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleFilterChange = (title, rating) => {
    const filtered = movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      const matchesRating = rating ? movie.rating >= parseFloat(rating) : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>Ma Collection de Films Tunisiens</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
