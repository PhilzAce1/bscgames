import React from 'react';

import LogoPNG from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <div class="container">
        <div class="row d-flex-mob">
          <div class="col-sm-3 m-auto logo-wrap">
            <div class="logo">
              <Link to="/">
                <img src={LogoPNG} alt="bit-logo" />
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
                    <Link class="nav-link" to="/">
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
                      href="../cdn-cgi/l/email-protection.html#01686f676e4163726266606c64722f76686f"
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
              <img src="assets/images/paper-plane.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
