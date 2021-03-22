import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div class="container-fluid footer-menu-box">
        <div class="container">
          <div class="row">
            <div class="col-sm-3 footer-col-list">
              <h5>Our Games</h5>
              <ul>
                <li>
                  <a href="coin-flip.html">
                    <span class="on-hov">-</span>Coin Flip
                  </a>
                </li>
                <li>
                  <a href="roll-a-dice.html">
                    <span class="on-hov">-</span>Roll A Dice
                  </a>
                </li>
                <li>
                  <a href="two-dice.html">
                    <span class="on-hov">-</span>Two Dice
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-3 footer-col-list">
              <h5>Blockchain & Friends</h5>
              <ul>
                <li>
                  <span class="on-hov">-</span>Your Balance :: 0.00 BSC
                </li>
                <li>
                  <span class="on-hov">-</span>Network :: Mainnet
                </li>
                <li>
                  <span class="on-hov">-</span>Smart Contract
                </li>
              </ul>
            </div>
            <div class="col-sm-3 footer-col-list">
              <h5>Featured on</h5>
              <ul>
                <li>
                  <a href="https://stuff.com">
                    <span class="on-hov">-</span>Github
                  </a>
                </li>
                <li>
                  <a href="https://stuff.com">
                    <span class="on-hov">-</span>State-of-the-DApps
                  </a>
                </li>
                <li>
                  <a href="https://stuff.com">
                    <span class="on-hov">-</span>DappRadar
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-3 footer-col-list">
              <h5>Reach out to us</h5>
              <ul>
                <li>
                  <a
                    href="https://t.me/bscgameswin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="on-hov">-</span>Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/bscgameswin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="on-hov">-</span>Twitter
                  </a>
                </li>
                <li>
                  <a href="../cdn-cgi/l/email-protection.html#01686f676e4163726266606c64722f76686f">
                    <span class="on-hov">-</span>Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="google_translate_element"></div>
      <div class="container-fluid bottom-footer">
        <span>2021 BSC Games , All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
