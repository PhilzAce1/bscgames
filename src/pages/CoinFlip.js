import React from 'react';
import Header from '../components/CoinFlip/Header';
import LanguageSwitch from '../components/Languages';
import HeroSec from '../components/CoinFlip/HeroSec';
import GameHistoryMain from '../components/CoinFlip/GameHistoryMain';
import Footer from '../components/Footer';

function CoinFlip(props) {
  return (
    <div className="demo inner_pages game_page">
      <Header />
      <LanguageSwitch />
      <HeroSec />
      <GameHistoryMain />
      <Footer />
    </div>
  );
}

export default CoinFlip;
