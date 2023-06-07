import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import ElseMoviesCard from '../ElseMoviesCard/ElseMoviesCard';

export default function SavedMovies() {
  return (
    <>
      <Header type="saved-movies" loggedIn={true} />
      <main className="page">
        <SearchForm />
        <MoviesCardList />
        <ElseMoviesCard isActive={false} />
      </main>
      <Footer />
    </>
  );
}