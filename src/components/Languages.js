import React from 'react';
import EngSVG from '../assets/flags/eng2.svg';
import IrnSVG from '../assets/flags/irn2.svg';
import RusSVG from '../assets/flags/rus2.svg';
import ChiSVG from '../assets/flags/chi2.svg';
import EspSVG from '../assets/flags/esp2.svg';
import AraSVG from '../assets/flags/ara2.svg';
import TrkSVG from '../assets/flags/trk2.svg';
import BgdSVG from '../assets/flags/bgd2.svg';

function Languages(props) {
  return (
    <div class="langblock">
      <a href="#en" class="langwrap langwrap_en">
        <img src={EngSVG} alt="" />
      </a>
      <a href="#ir" class="langwrap langwrap_fa">
        <img src={IrnSVG} alt="" />
      </a>
      <a href="#rn" class="langwrap langwrap_ru">
        <img src={RusSVG} alt="" />
      </a>
      <a href="#chi" class="langwrap langwrap_zh">
        <img src={ChiSVG} alt="" />
      </a>
      <a href="#esp" class="langwrap langwrap_es">
        <img src={EspSVG} alt="" />
      </a>
      <a href="#ara" class="langwrap langwrap_ar">
        <img src={AraSVG} alt="" />
      </a>
      <a href="#trk" class="langwrap langwrap_tr">
        <img src={TrkSVG} alt="" />
      </a>
      <a href="#bgd" class="langwrap langwrap_bd">
        <img src={BgdSVG} alt="" />
      </a>
    </div>
  );
}

export default Languages;
