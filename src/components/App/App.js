import './App.css';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route  path='/movies' element={<Movies />} />
        <Route  path='/saved-movies' element={<SavedMovies />} />
        <Route  path='/profile' element={<Profile />} />
        <Route  path='/signin' element={<Login />} />
        <Route  path='/signup' element={<Register />} />
        <Route  path='*' element={<ErrorPage number='404' message='Страница не найдена' />} />
      </Routes>
    </div>
  );
}

export default App;
