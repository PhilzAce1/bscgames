import React from 'react';
import SVGWhitePNG from '../../assets/images/download-svg-white.png';
import YellowPNG from '../../assets/images/yellow.PNG';
import WhitePNG from '../../assets/images/white_svg.png';

function GameHistoryMain(props) {
  const TableData = Array(6)
    .fill(1)
    .map((x, i) => (
      <tr key={i}>
        <td>
          <img src={SVGWhitePNG} class="td_image" alt="" width="20px" />
          <a href="#js">0xddfd7f </a>
        </td>
        <td>
          4.80
          <span class="ludos ludo_td">
            <img src={WhitePNG} class="img-responsive" alt="" />
          </span>
        </td>
        <td>
          <span class="ludos ludo_td img_mid">
            <img
              src={YellowPNG}
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
    ));
  return (
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
                    <a class="lang" href="#js">
                      Public
                    </a>
                  </li>
                  <li>
                    <a class="lang" href="#js">
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
                <tbody>{TableData}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameHistoryMain;
