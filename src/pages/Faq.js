import React from 'react';

/**=====================Images================== */
import LogoPNG from '../assets/images/logo.png';
import PaperPlanePNG from '../assets/images/paper-plane.png';

/**======================Style======================== */
import LanguagesSwitch from '../components/Languages';
import { Link } from 'react-router-dom';
export default function Faq() {
  return (
    <div className="demo inner_pages game_page">
      <header>
        <div className="container">
          <div class="row d-flex-mob">
            <div class="col-sm-3 m-auto logo-wrap">
              <div class="logo">
                <Link to="/">
                  <img src={LogoPNG} alt="logo" />
                </Link>
              </div>
            </div>
            <div class="col-sm-6 menu-wrap">
              <nav class="navbar navbar-expand-sm navbar-dark">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse text-center"
                  id="collapsibleNavbar"
                >
                  <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                      <Link class="nav-link" to="/demo">
                        Games &nbsp;&nbsp;<span class="menu-divider">|</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/faq">
                        FAQ &nbsp;&nbsp;<span class="menu-divider">|</span>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="../cdn-cgi/l/email-protection.html#82ebece4edc2e0f1e1e5e3efe7f1acf5ebec"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="col-sm-3 text-right m-auto lang-wrap">
              <a class="mail pr-1" href="https://t.me/bscgameswin">
                <img src={PaperPlanePNG} alt="paper plane" />
              </a>
            </div>{' '}
          </div>
        </div>
      </header>

      <LanguagesSwitch />
      <div class="hero-sec">
        <div class="valuesss">
          <div class="container">
            <div class="row w-85 w-100-mob mx-auto ">
              <div class="wall-of-text">
                <h1>What is provably fair on-chain gambling?</h1>
                <p>
                  Simply put, provably fair means that any bet outcome can be
                  independently verified and that the operator or other players
                  have no means of tampering with the result.
                </p>
                <h1>Is bscgame.win provably fair?</h1>
                <p>
                  Yes. The whole gameplay is controlled by Ethereum Smart
                  Contract that computes random numbers based on operator inputs
                  and blockchain data (block hashes). Any party can audit the
                  contract as well as inspect any transaction to make sure that
                  neither bscgame.win nor malicious players are influencing the
                  results.
                </p>
                <h1>How are you different from the other gambling sites?</h1>
                <p>
                  Placing a bet on bscgame.win has much lower transaction fee
                  compared to competing websites − this allows supporting bets
                  as low as 0.01 ETH. Our games are very simple &amp; easily
                  understandable, just like tossing a coin or rolling a bscgame.
                </p>
                <p>And, of course, we have jackpot!</p>
                <h1>Is there any catch? Explain how it works like I'm five.</h1>
                <p>
                  This is where we have to get a bit technical:
                  <ol>
                    <li>
                      bscgame.win picks a secret random number and provides you
                      with its hash.
                    </li>
                    <li>
                      You send your bet in Ethereum transaction to our smart
                      contract along with the hash from previous step.
                    </li>
                    <li>
                      At this point bscgame.win has already commited to a
                      number, prior to you chosing an outcome.
                    </li>
                    <li>
                      Once your transaction is confirmed by the network, the
                      contract stores the hash and bet details.
                    </li>
                    <li>
                      Our croupier bot "reveals" the number by sending a bet
                      settling transaction.
                    </li>
                    <li>
                      The contract accepts the transaction if and only if the
                      hash of provided number is the same as the stored one.
                    </li>
                    <li>
                      The contract mixes the number and block hash of the bet
                      transaction to get a random number.
                    </li>
                    <li>
                      The contract decides whether you won or lost and sends you
                      the winning amount of Ether.
                    </li>
                  </ol>
                  Can bscgame.win tamper with the results? Nope, as the contract
                  keeps track of secret number's hash, meaning the operator
                  cannot change the number after the bet has been accepted.
                  Mixing the block hash with the numbers makes the result
                  totally random yet disallows miners from crafting winning
                  bets. On the other hand, bscgame.win themselves cannot control
                  bet outcomes either because of block hash component. This is a
                  well-known "commitment scheme" which enables bscgame.win to
                  provide gambling-grade random number generation allowing for
                  big bets, jackpots and quick settlements while being fully
                  transparent.
                </p>
                <h1>
                  What if I want to <strong>really</strong> verify that
                  everything you say is actually true?
                </h1>
                <p>
                  Feel free to study our Smart Contract - it's available on
                  Github. In case you have any questions or hesitations, drop us
                  a line via Telegram,Twitter or e-mail.
                </p>
                <h1>What are the fees?</h1>
                <p>
                  Every bet is deducted 1% (but no less than 0.0003 ETH) in
                  favour of the bscgame.win (to help us pay the bills and keep
                  the game running) and 0.001 ETH more gets accumulated in the
                  jackpot for bets of 0.1 ETH and up (which also makes these
                  bets participate in jackpot!)
                </p>
                <h2 class="text-center">Happy playing!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="container-fluid footer-menu-box">
          <div class="container">
            <div class="row">
              <div class="col-sm-3 footer-col-list">
                <h5>Our Games</h5>
                <ul>
                  <li>
                    <Link to="/coinflip">
                      <span class="on-hov">-</span>Coin Flip
                    </Link>
                  </li>
                  <li>
                    <Link to="/rolldice">
                      <span class="on-hov">-</span>Roll A Dice
                    </Link>
                  </li>
                  <li>
                    <Link to="/twodice">
                      <span class="on-hov">-</span>Two Dice
                    </Link>
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
                    <a href="#github">
                      <span class="on-hov">-</span>Github
                    </a>
                  </li>
                  <li>
                    <a href="#link">
                      <span class="on-hov">-</span>State-of-the-DApps
                    </a>
                  </li>
                  <li>
                    <a href="#link">
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
                    <a href="../cdn-cgi/l/email-protection.html#462f2820290624352521272b233568312f28">
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
    </div>
  );
}
