import './App.css';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { signUp, signIn, checkToken, signOut } from '../../utils/AuthApi';
import { getInfoProfile, getLikedMovies, sendSavedMovie, dislikeMovie, editInfoProfile } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [formError, setFormError] = useState({ isError: false, text: '' });
  const storageSearch = localStorage.getItem('movieSearch');
  const [searchedMovies, setSearchedMovies] = useState(storageSearch ? JSON.parse(storageSearch) : []);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });

 useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  useEffect(() => {
    setIsLoading(true)
    Promise.all([getInfoProfile(), getLikedMovies()])
      .then(([user, likedMovies]) => {
        setCurrentUser(user);
        setSavedMovies(likedMovies);
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsLoading(false));
  }, [loggedIn]);

  function tokenCheck() {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      return;
    } else {
      setIsLoading(true)
      checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          const path = location.pathname;
          navigate(path);
        })
        .catch((err) => setFormError({ isError: true, text: err.message }))
        .finally(() => setIsLoading(false));
    }
  }
  function handleRegister({ name, email, password }) {
    setIsLoading(true)
    signUp({ name, email, password }) 
      .then((data) => data._id && handleLogin({email, password}))
      .catch((err) => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsLoading(false));
  }
  function handleLogin({email, password}) {
    setIsLoading(true)
    signIn({email, password})
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsLoading(false));
  }

  function handleLikedMovie(movieInfo) {
    let timeoutId = setTimeout(() => setIsLoading(true), 1000);
    sendSavedMovie(movieInfo)
      .then(like => {
        clearTimeout(timeoutId);
        if (!savedMovies.some(movie => movie.id === like.id)) {
          setSavedMovies([...savedMovies, like]);
        };
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsLoading(false));
  }
  function handleDislikeMovie(savedMovieId) {
    let timeoutId = setTimeout(() => setIsLoading(true), 1000);

    dislikeMovie(savedMovieId)
      .then(() => {
        clearTimeout(timeoutId);
        const dislikedCard = savedMovies.filter((movie) => movie._id !== savedMovieId);
        setSavedMovies(dislikedCard);
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsLoading(false));
  }
  function handleEditProfile({ name, email }) {
    setIsLoading(true)
    editInfoProfile({ name, email })
      .then((res) => {
        setCurrentUser({ name: res.name, email: res.email });
        setFormError({ isError: true, text: 'Данные профиля успешно сохранены' });
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsLoading(false));
  }
  const handleSignOut = () => {
    setIsLoading(true);
    signOut()
      .then(() => {
        navigate('/');
        setCurrentUser({ name: '', email: '' });
        setLoggedIn(false);
        setFormError({ isError: false, text: '' });
        setSearchedMovies([]);
        setSavedMovies([]);
        localStorage.clear();
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/signup"
            element={loggedIn 
              ? <Navigate to='/' />
              : <Register onRegister={handleRegister} formError={formError} />
            }
          />
          <Route
            path="/signin"
            element={loggedIn 
              ? <Navigate to='/' />
              : <Login onLogin={handleLogin} formError={formError} />
            }
          />
          <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
          <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path="/profile"
              element={
                <Profile
                  loggedIn={loggedIn}
                  formError={formError}
                  handleEditProfile={handleEditProfile}
                  onSignOut={handleSignOut}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  loggedIn={loggedIn}
                  handleLikedMovie={handleLikedMovie}
                  setIsLoading={setIsLoading}
                  savedMovies={savedMovies}
                  handleDislikeMovie={handleDislikeMovie}
                  setSavedMovies={setSavedMovies}
                  setSearchedMovies={setSearchedMovies}
                  searchedMovies={searchedMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  loggedIn={loggedIn}
                  handleLikedMovie={handleLikedMovie}
                  setIsLoading={setIsLoading}
                  savedMovies={savedMovies}
                  handleDislikeMovie={handleDislikeMovie}
                  setSavedMovies={setSavedMovies}
                />
              }
            />
          </Route>
          <Route
            path="*"
            element={<ErrorPage number="404" message="Страница не найдена" />}
          />
        </Routes>
        <Preloader isActive={isLoading} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
