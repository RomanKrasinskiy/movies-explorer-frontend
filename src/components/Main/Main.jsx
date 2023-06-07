import './Main.css'
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer';
import React from 'react';

export default function Main() {
  return (
    <>
      <Header type="landing" loggedIn={false} />
      <main className="page">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

