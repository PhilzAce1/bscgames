import React from 'react';
import Header from '../components/CoinFlip/Header';
import LanguageSwitch from '../components/Languages';
import HeroSec from '../components/HeroSec';
function CoinFlip(props) {
  return (
    <div className="demo inner_pages game_page">
      <Header />
      <LanguageSwitch />
      <div class="hero-sec">
        <div class="valuesss">
          <div class="container">
            <div class="row">
              <div
                class="col-sm-4 wow fadeInUp"
                data-wow-duration="500ms"
                data-wow-delay="200ms"
              >
                <div class="dice_game">
                  <div class="heading_game">
                    <h2>
                      <img class="img-responsive" alt="" />
                      Coin Flip
                    </h2>
                  </div>
                  <div class="dice_game_body clearfix">
                    <div class="all_dice clearfix">
                      <label class="single_dice highlight">
                        <input type="checkbox" checked="checked" />
                        <span>
                          <img alt="text" />
                        </span>
                      </label>
                      <label class="single_dice">
                        <input type="checkbox" />
                        <span>
                          <img alt="" />
                        </span>
                      </label>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="dice_game_footer">
                    <div class="all_dice_dit">
                      <p>Choose the dice number(s) to bet on</p>
                      <div class="play_numbers">
                        <div class="quick-bets">
                          <button class="">0.10</button>
                          <button class="">0.25</button>
                          <button class="">0.50</button>
                          <button>max</button>
                        </div>
                      </div>
                      <div class="incre_dec">
                        <div class="field">
                          <button
                            class="minus do-min"
                            data-type="minus"
                            data-field="bitnumbers"
                          >
                            −
                          </button>
                          <input
                            type="text"
                            name="bitnumbers"
                            value="1"
                            size="2"
                            id="input-bitnumbers"
                          />
                          <button
                            class="plus do-plus"
                            data-type="plus"
                            data-field="bitnumbers"
                          >
                            +
                          </button>
                          <p>Your bet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-8 wow fadeInUp"
                data-wow-duration="500ms"
                data-wow-delay="200ms"
              >
                <div class="row w-100-mob sec-overlay-banner">
                  <div
                    class="col-sm-4 sec-overlay-banner-wrap wow fadeInUp"
                    data-wow-duration="500ms"
                    data-wow-delay="200ms"
                  >
                    <div class="col-overlay">
                      <p class="m-0">Winning chance</p>
                      <h2 class="m-0">
                        50 <span class="ethereum">%</span>
                      </h2>
                      <p class="m-0">281 bets</p>
                    </div>
                  </div>
                  <div
                    class="col-sm-4 sec-overlay-banner-wrap wow fadeInUp"
                    data-wow-duration="700ms"
                    data-wow-delay="300ms"
                  >
                    <div class="col-overlay">
                      <p class="m-0">Winning bet pays</p>
                      <h2 class="m-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          // xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="38px"
                          height="38px"
                          viewBox="0 0 128 128"
                          version="1.1"
                        >
                          <defs />
                          <g
                            id="Icon"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Coin-Pile"
                              transform="translate(27.000000, 14.000000)"
                              fill="#FFFFFF"
                              fill-rule="nonzero"
                            >
                              <path
                                d="M53.6686663,52 L51.4429277,51.1428571 C51.677216,50.6530612 51.677216,50.0408163 51.677216,49.5510204 C51.677216,46.8571429 49.217189,44.1632653 45,42.2040816 L45.9371531,40 C51.0914953,42.4489796 53.9029546,45.877551 53.9029546,49.5510204 C54.1372429,50.4081633 53.9029546,51.1428571 53.6686663,52 Z"
                                id="Shape"
                              />
                              <path
                                d="M29.7042254,61 C29.7042254,61 29.7042254,61 29.7042254,61 C18.084507,61 8.32394366,57.2222222 6,51.8888889 L8.0915493,51 C10.0669014,55.4444444 19.2464789,58.7777778 29.5880282,58.7777778 C29.5880282,58.7777778 29.5880282,58.7777778 29.7042254,58.7777778 C32.7253521,58.7777778 35.6302817,58.4444444 38.5352113,57.8888889 L39,60.1111111 C35.9788732,60.6666667 32.8415493,61 29.7042254,61 Z"
                                id="Shape"
                              />
                              <path
                                d="M31.3114187,71 C17.1418685,71 6,65.5730337 6,58.6123596 L6,50 L8.42214533,50 L8.42214533,58.6123596 C8.42214533,64.0393258 18.8373702,68.6404494 31.1903114,68.6404494 C34.3391003,68.6404494 37.4878893,68.4044944 40.5155709,67.6966292 L41,70.0561798 C37.7301038,70.6460674 34.4602076,71 31.3114187,71 Z"
                                id="Shape"
                              />
                              <path
                                d="M30.9038462,81 C30.7852564,81 30.6666667,81 30.6666667,81 C16.9102564,81 6,75.5730337 6,68.6123596 L6,60 L8.37179487,60 L8.37179487,68.6123596 C8.37179487,74.0393258 18.5705128,78.6404494 30.6666667,78.6404494 C34.5801282,78.6404494 38.6121795,78.1685393 42.4070513,77.1067416 L43,79.3483146 C39.0865385,80.4101124 35.0544872,81 30.9038462,81 Z"
                                id="Shape"
                              />
                              <path
                                d="M31.2578797,89 C31.0229226,89 30.7879656,89 30.4355301,89 C16.8080229,89 6,83.5730337 6,76.6123596 L6,68 L8.3495702,68 L8.3495702,76.6123596 C8.3495702,82.0393258 18.4527221,86.6404494 30.4355301,86.6404494 C35.8395415,86.758427 41.1260745,85.6966292 46.0601719,83.6910112 L47,85.8146067 C41.9484241,87.9382022 36.6618911,89 31.2578797,89 Z"
                                id="Shape"
                              />
                              <path
                                d="M29.877551,97 C16.4464286,97 6,91.5730337 6,84.6123596 L6,76 L8.29591837,76 L8.29591837,84.6123596 C8.29591837,90.0393258 18.1683673,94.6404494 29.877551,94.6404494 C38.1428571,94.6404494 45.8341837,92.2808989 49.3928571,88.741573 L51,90.3932584 C46.9821429,94.5224719 38.8316327,97 29.877551,97 Z"
                                id="Shape"
                              />
                              <path
                                d="M23.5,43 C10.3676471,43 0,37.75 0,30.9833333 C0,27.4833333 2.76470588,24.3333333 7.71813725,22 L8.63970588,24.1 C4.60784314,25.9666667 2.30392157,28.4166667 2.30392157,30.9833333 C2.30392157,36.2333333 11.9803922,40.6666667 23.5,40.6666667 C35.0196078,40.6666667 44.6960784,36.2333333 44.6960784,30.9833333 C44.6960784,30.2833333 44.5808824,29.7 44.2352941,29.1166667 L46.3088235,28.0666667 C46.7696078,29 47,30.05 47,30.9833333 C47,37.75 36.747549,43 23.5,43 Z"
                                id="Shape"
                              />
                              <path
                                d="M23.5,56 C10.3676471,56 0,50.6195652 0,43.6847826 L0,34 L2.30392157,34 L2.30392157,43.6847826 C2.30392157,49.0652174 11.9803922,53.6086957 23.5,53.6086957 C35.0196078,53.6086957 44.6960784,49.0652174 44.6960784,43.6847826 L44.6960784,34 L47,34 L47,43.6847826 C47,50.6195652 36.747549,56 23.5,56 Z"
                                id="Shape"
                              />
                              <path
                                d="M29.5,25 C16.252451,25 6,19.538835 6,12.5 C6,5.46116505 16.252451,0 29.5,0 C42.6323529,0 53,5.46116505 53,12.5 C53,19.538835 42.6323529,25 29.5,25 Z M29.5,2.42718447 C17.9803922,2.42718447 8.30392157,7.03883495 8.30392157,12.5 C8.30392157,17.961165 17.9803922,22.5728155 29.5,22.5728155 C41.0196078,22.5728155 50.6960784,17.961165 50.6960784,12.5 C50.6960784,7.03883495 40.9044118,2.42718447 29.5,2.42718447 Z"
                                id="Shape"
                              />
                              <path
                                d="M29.5,34 C16.252451,34 6,28.5901639 6,21.7377049 L6,12 L8.30392157,12 L8.30392157,21.7377049 C8.30392157,27.147541 17.9803922,31.715847 29.5,31.715847 C41.0196078,31.715847 50.6960784,27.147541 50.6960784,21.7377049 L50.6960784,12 L53,12 L53,21.7377049 C53,28.5901639 42.6323529,34 29.5,34 Z"
                                id="Shape"
                              />
                              <path
                                d="M70.4076342,94 C64.4794978,94 56.6156434,87.8991107 50.8084893,78.209463 C43.7915115,66.3665603 43.0656172,54.4040323 48.9937536,50.9348992 C55.0428725,47.4657661 65.2053921,53.9255312 72.2223699,65.7684339 C75.4888941,71.2711968 77.5455944,77.0132102 77.9085416,82.037472 C78.3924711,87.3009843 76.9406826,91.2486186 73.9161232,93.0429978 C72.9482641,93.6411242 71.7384404,94 70.4076342,94 Z M50.3245598,52.968529 C45.6062471,55.7199104 46.8160709,66.7254362 52.9861721,76.893585 C59.0352909,87.181359 68.2299515,93.5214989 72.8272818,90.8897427 C75.0049645,89.6934899 75.9728236,86.4636074 75.6098764,82.1570973 C75.2469293,77.4917114 73.3112113,72.1085738 70.1656695,66.8450614 C64.1165507,56.6769126 55.0428725,50.3367728 50.3245598,52.968529 Z"
                                id="Shape"
                              />
                              <path
                                d="M62.055113,97 C56.2021184,97 48.4379418,91.0224439 42.704396,81.5286783 C39.4792765,76.1371571 37.4486458,70.5112219 37.0902991,65.5885287 C36.6125037,60.4314214 38.0458901,56.563591 41.0321119,54.8054863 L49.3935328,50 L50.5880215,51.9925187 L42.2266006,56.798005 C40.0765209,57.9700748 39.1209299,61.1346633 39.4792765,65.3541147 C39.8376232,69.925187 41.7488051,75.1995012 44.8544757,80.3566085 C50.8269192,90.436409 59.9050333,96.6483791 64.4440904,94.0698254 L72.8055113,89.2643392 L74,91.2568579 L65.6385791,96.0623441 C64.5635393,96.765586 63.2496017,97 62.055113,97 Z"
                                id="Shape"
                              />
                            </g>
                          </g>
                        </svg>
                        1.96 <span class="ethereum">+</span>
                      </h2>
                      <p class="m-0 color_orange">You will win 0.196 ETH</p>
                      <p class="m-0">1% fee, 0.001 BSC to jackpot</p>
                    </div>
                  </div>
                  <div
                    class="col-sm-4 sec-overlay-banner-wrap wow fadeInUp"
                    data-wow-duration="700ms"
                    data-wow-delay="300ms"
                  >
                    <div class="col-overlay">
                      <p class="m-0">Jackpot contains</p>
                      <h2 class="m-0">
                        50.00 <span class="ethereum">%</span>
                      </h2>
                      <p class="m-0 color_orange">Lucky number is 888!</p>
                      <p class="m-0">1% fee, 0.001 BSC to jackpot</p>
                    </div>
                  </div>
                  <div
                    class="col-sm-12 sec-overlay-banner-wrap mega_mask_bg wow fadeInUp"
                    data-wow-duration="500ms"
                    data-wow-delay="200ms"
                  >
                    <div class="mega_mask">
                      <p href="#" class="play-btn">
                        <img
                          src="assets/images/mega.png"
                          class="img-responsive"
                          alt=""
                        />
                        Get Meta Mask
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="game_history_main">
        <div class="container">
          <div class="game_history">
            <div class="heading_game clearfix">
              <div class="title">
                <h2>Game History</h2>
              </div>
              <div class="only_me language_tab">
                <div class="dropdown lang">
                  <button
                    type="button"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Only me
                  </button>
                  <div class="dropdown-menu">
                    <li>
                      <a class="lang" href="stff.com">
                        Public
                      </a>
                    </li>
                    <li>
                      <a class="lang" href="stff.com">
                        Only me
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div class="game_history_body">
              <div class="table-reponsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Players</th>
                      <th>Bet</th>
                      <th>Result</th>
                      <th></th>
                      <th>Points</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="assets/images/download-svg-white.png"
                          class="td_image"
                          width="20px"
                          alt=""
                        />
                        <a href="stuff.com">0xddfd7f </a>
                      </td>
                      <td>
                        4.80
                        <span class="ludos ludo_td">
                          <img src="" class="img-responsive" alt="" />
                        </span>
                      </td>
                      <td>
                        <span class="ludos ludo_td img_mid">
                          <img
                            src=""
                            class="img-responsive color_orange"
                            alt=""
                          />
                        </span>
                      </td>
                      <td>-</td>
                      <td>3.526</td>
                      <td>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="assets/images/download-svg-white.png"
                          class="td_image"
                          width="20px"
                          alt=""
                        />
                        <a href="stuff.com">0xddfd7f </a>
                      </td>
                      <td>
                        4.80
                        <span class="ludos ludo_td">
                          <img src="" class="img-responsive" alt="" />
                        </span>
                      </td>
                      <td>
                        <span class="ludos ludo_td img_mid">
                          <img
                            src=""
                            class="img-responsive color_orange"
                            alt=""
                          />
                        </span>
                      </td>
                      <td>-</td>
                      <td>3.526</td>
                      <td>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="assets/images/download-svg-white.png"
                          class="td_image"
                          width="20px"
                          alt=""
                        />
                        <a href="stuff.com">0xddfd7f </a>
                      </td>
                      <td>
                        4.80
                        <span class="ludos ludo_td">
                          <img src="" alt="stff" class="img-responsive" />
                        </span>
                      </td>
                      <td>
                        <span class="ludos ludo_td img_mid">
                          <img
                            src=""
                            class="img-responsive color_orange"
                            alt=""
                          />
                        </span>
                      </td>
                      <td>-</td>
                      <td>3.526</td>
                      <td>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="assets/images/download-svg-white.png"
                          class="td_image"
                          width="20px"
                          alt=""
                        />
                        <a href="stuff.com">0xddfd7f </a>
                      </td>
                      <td>
                        4.80
                        <span class="ludos ludo_td">
                          <img src="" class="img-responsive" alt="" />
                        </span>
                      </td>
                      <td>
                        <span class="ludos ludo_td img_mid">
                          <img
                            src=""
                            class="img-responsive color_orange"
                            alt=""
                          />
                        </span>
                      </td>
                      <td>-</td>
                      <td>3.526</td>
                      <td>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="assets/images/download-svg-white.png"
                          class="td_image"
                          alt=""
                          width="20px"
                        />
                        <a href="stuff.com">0xddfd7f </a>
                      </td>
                      <td>
                        4.80
                        <span class="ludos ludo_td">
                          <img src=" " class="img-responsive" alt="" />
                        </span>
                      </td>
                      <td>
                        <span class="ludos ludo_td img_mid">
                          <img
                            src=""
                            class="img-responsive color_orange"
                            alt=""
                          />
                        </span>
                      </td>
                      <td>-</td>
                      <td>3.526</td>
                      <td>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="assets/images/download-svg-white.png"
                          class="td_image"
                          alt=""
                          width="20px"
                        />
                        <a href="stuff.com">0xddfd7f </a>
                      </td>
                      <td>
                        4.80
                        <span class="ludos ludo_td">
                          <img src=" " class="img-responsive" alt="" />
                        </span>
                      </td>
                      <td>
                        <span class="ludos ludo_td img_mid">
                          <img
                            src=" "
                            class="img-responsive 
                          color_orange"
                            alt=""
                          />
                        </span>
                      </td>
                      <td>-</td>
                      <td>3.526</td>
                      <td>
                        <i class="fa fa-chevron-right" aria-hidden={true}></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinFlip;
