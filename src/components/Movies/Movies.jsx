import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ElseMoviesCard from '../ElseMoviesCard/ElseMoviesCard';
import Footer from '../Footer/Footer';
import React from 'react';


export default function Movies() {
  return (
    <>
      <Header type="movies" loggedIn={true} />
      <main className="page">
          <SearchForm />
          <MoviesCardList />
          <ElseMoviesCard isActive={true} />
      </main>
      <Footer />
    </>
  );
}
