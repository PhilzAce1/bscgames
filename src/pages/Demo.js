import React from 'react';

import DownloadPNG from '../assets/images/download-svg.png';
import PlayNowPNG from '../assets/images/play_now.svg';
import LanguageSwitch from '../components/Languages';

import Footer from '../components/Footer';
import Header from '../components/CoinFlip/Header';

import { Link } from 'react-router-dom';
function Demo(props) {
  return (
    <div className="demo">
      <Header />
      <LanguageSwitch />
      <div class="hero-sec">
        <div class="text-center container">
          <h1 className="pb-2 games_white">Fair Games That Pay BSC</h1>
          <p>
            Provably fair bets backed by simple open-sourced contract
            <br />
            No sign-ups or deposits, just 1% edge and jackpot!
          </p>
        </div>
      </div>
      <div class="valuesss">
        <div class="container">
          <div class="row w-85 w-100-mob mx-auto sec-overlay-banner">
            <div
              class="col-sm-4 sec-overlay-banner-wrap wow fadeInUp"
              data-wow-duration="500ms"
              data-wow-delay="200ms"
            >
              <div class="col-overlay">
                <p class="m-0">24h wagers</p>
                <h2 class="m-0">
                  1033.86 <span class="ethereum">BSC</span>
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
                <p class="m-0">24h wagers</p>
                <h2 class="m-0">
                  1033.86 <span class="ethereum">BSC</span>
                </h2>
                <p class="m-0">281 bets</p>
              </div>
            </div>
            <div
              class="col-sm-4 sec-overlay-banner-wrap wow fadeInUp"
              data-wow-duration="800ms"
              data-wow-delay="400ms"
            >
              <div class="col-overlay">
                <p class="m-0">24h wagers</p>
                <h6 class="m-0 eth-code pb-2 pt-2 text-left">
                  <img src={DownloadPNG} width="20px" alt="download png" />
                  0xddfd7f
                  <span class="eth-num">
                    49.50<span class="ethereum">BSC</span>
                  </span>
                </h6>
                <h6 class="m-0 eth-code text-left">
                  <img src={DownloadPNG} width="20px" alt="download png" />
                  0xddfd7f
                  <span class="eth-num">
                    49.50<span class="ethereum">BSC</span>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="play-option-sec">
        <div class="container play-option-wrap">
          <div class="row w-85 w-100-mob mx-auto">
            <div
              class="play-c-flip play-col d-flex justify-content-between wow fadeInDown"
              data-wow-duration="600ms"
              data-wow-delay="200ms"
            >
              <div class="icon-box-left d-flex">
                <img
                  class="pr-3"
                  src={PlayNowPNG}
                  style={{
                    height: '60px',
                  }}
                  //   style={{height: "60px"}}
                  alt="src"
                />
                <div class="icon-box-cont">
                  <h5 class="mb-0">Coin Flip</h5>
                  <p class="mb-0">
                    Heads or tails? Fifty-fifty Heads or tails? Fifty-fifty
                  </p>
                </div>
              </div>
              <Link to="/coinflip" class="play-btn">
                Play Now
              </Link>
            </div>
            <div
              class="play-c-dice play-col play-col-center d-flex justify-content-between wow fadeInDown"
              data-wow-duration="700ms"
              data-wow-delay="300ms"
            >
              <div class="icon-box-left d-flex">
                <img
                  class="pr-3"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMSAoNTExNDcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNjQuMDAwMDIzMiwxOSBDNjEuNTg2MDc1MSwxOC45OTk5OTk1IDU5LjE3MjU2MDEsMTkuOTE2MzgwNCA1Ny4zMzg3MjU3LDIxLjc1MDIyNzkgTDIxLjc1MDc3MjksNTcuMzM4Mzk2IEMxOC4wODMwODUyLDYxLjAwNjEwNjcgMTguMDgzMDY2Miw2Ni45OTM0MDM3IDIxLjc1MDc3MjksNzAuNjYxMDY5NCBMNTcuMzM4NzI1NywxMDYuMjQ5MjM3IEM2MS4wMDY0MDM5LDEwOS45MTY5MTQgNjYuOTkzNjc2MywxMDkuOTE2OTI3IDcwLjY2MTMxODgsMTA2LjI0OTIzNyBMMTA2LjI0OTI3Miw3MC42NjEwNjk0IEMxMDkuOTE2OTE3LDY2Ljk5MzM5OCAxMDkuOTE2OTAyLDYxLjAwNjEwNjcgMTA2LjI0OTI3Miw1Ny4zMzgzOTYgTDcwLjY2MTMxODgsMjEuNzUwMjI3OSBDNjguODI3NDc4OCwxOS45MTYzODc4IDY2LjQxMzk2OTUsMTkuMDAwMDAwNSA2NC4wMDAwMjMyLDE5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii0xMi4yJSIgeT0iLTE0LjQlIiB3aWR0aD0iMTI4LjklIiBoZWlnaHQ9IjEyOC45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTIiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjIiIGR5PSIwIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJPbmUtQ3ViZS1Mb2dvIj4KICAgICAgICAgICAgPGcgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NC4wMDAwMDAsIDY0LjAwMDAwMCkgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC02NC4wMDAwMDAsIC02NC4wMDAwMDApICI+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMiIgZmlsbD0iIzRFNEU0RSIgY3g9Ijc3IiBjeT0iNDQiIHI9IjYiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGZpbGw9IiM0RTRFNEUiIGN4PSI1MCIgY3k9IjQ0IiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBmaWxsPSIjNEU0RTRFIiBjeD0iNzciIGN5PSI2NCIgcj0iNiI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMiIgZmlsbD0iIzRFNEU0RSIgY3g9IjUwIiBjeT0iNjQiIHI9IjYiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGZpbGw9IiM0RTRFNEUiIGN4PSI3NyIgY3k9Ijg1IiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBmaWxsPSIjNEU0RTRFIiBjeD0iNTAiIGN5PSI4NSIgcj0iNiI+PC9jaXJjbGU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                  style={{ height: '60px' }}
                  alt="asdf"
                />
                <div class="icon-box-cont">
                  <h5 class="mb-0">Roll A Dice</h5>
                  <p class="mb-0">
                    Heads or tails? Fifty-fifty Heads or tails? Fifty-fifty
                  </p>
                </div>
              </div>
              <Link to="/coinflip" class="play-btn">
                Play Now
              </Link>
            </div>
            <div
              class="play-t-dice play-col d-flex justify-content-between wow fadeInDown"
              data-wow-duration="800ms"
              data-wow-delay="400ms"
            >
              <div class="icon-box-left d-flex">
                <img
                  class="pr-3"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMSAoNTExNDcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNDkuNTAwMDE3OSwxNC43MTI1IEM0Ny42MzM5MDE5LDE0LjcxMjQ5OTYgNDUuNzY4MTIwOCwxNS40MjA5MTMgNDQuMzUwNDY0OSwxNi44Mzg1Nzg5IEwxNi44MzkwMDAzLDQ0LjM1MDIxIEMxNC4wMDM2NzM5LDQ3LjE4NTU1NDIgMTQuMDAzNjU5Miw1MS44MTQwNjczIDE2LjgzOTAwMDMsNTQuNjQ5Mzc2NyBMNDQuMzUwNDY0OSw4Mi4xNjEwMDc3IEM0Ny4xODU3ODM5LDg0Ljk5NjMyNTcgNTEuODE0Mjc4MSw4NC45OTYzMzU5IDU0LjY0OTU2OTUsODIuMTYxMDA3NyBMODIuMTYxMDM0Nyw1NC42NDkzNzY3IEM4NC45OTYzMjc2LDUxLjgxNDA2MyA4NC45OTYzMTYsNDcuMTg1NTU0MiA4Mi4xNjEwMzQ3LDQ0LjM1MDIxIEw1NC42NDk1Njk1LDE2LjgzODU3ODkgQzUzLjIzMTkwOTMsMTUuNDIwOTE4NyA1MS4zNjYxMzI1LDE0LjcxMjUwMDQgNDkuNTAwMDE3OSwxNC43MTI1IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgICAgICA8ZmlsdGVyIHg9Ii0xNS44JSIgeT0iLTE4LjclIiB3aWR0aD0iMTM3LjQlIiBoZWlnaHQ9IjEzNy40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTIiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjIiIGR5PSIwIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJUd28tQ3ViZS1Mb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAuMDAwMDAwLCAtNy4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTgzLjUwMDAxNzgsMzkgQzgxLjY0OTMyNDIsMzguOTk5OTk5NiA3OS43OTg5NjI4LDM5LjcwMjU1ODMgNzguMzkzMDIzMSw0MS4xMDg1MDggTDUxLjEwODkyNTksNjguMzkyNzcwMyBDNDguMjk3MDMyLDcxLjIwNDY4MTggNDguMjk3MDE3NCw3NS43OTQ5NDI4IDUxLjEwODkyNTksNzguNjA2ODE5OSBMNzguMzkzMDIzMSwxMDUuODkxMDgyIEM4MS4yMDQ5MDk2LDEwOC43MDI5NjggODUuNzk1MTUxOCwxMDguNzAyOTc4IDg4LjYwNzAxMTEsMTA1Ljg5MTA4MiBMMTE1Ljg5MTEwOSw3OC42MDY4MTk5IEMxMTguNzAyOTY5LDc1Ljc5NDkzODUgMTE4LjcwMjk1OCw3MS4yMDQ2ODE4IDExNS44OTExMDksNjguMzkyNzcwMyBMODguNjA3MDExMSw0MS4xMDg1MDggQzg3LjIwMTA2NzEsMzkuNzAyNTY0IDg1LjM1MDcwOTksMzkuMDAwMDAwNCA4My41MDAwMTc4LDM5IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODMuNTAwMDAwLCA3My41MDAwMDApIHJvdGF0ZSgyOS4wMDAwMDApIHRyYW5zbGF0ZSgtODMuNTAwMDAwLCAtNzMuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHktMyIgZmlsbD0iIzRFNEU0RSIgY3g9IjEwMy41IiBjeT0iODQuNSIgcj0iNC41Ij48L2NpcmNsZT4KICAgICAgICAgICAgPGcgaWQ9IlR3by1DdWJlLUxvZ28tQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAuNTAwMDAwLCA3MC41MDAwMDApIHJvdGF0ZSg0My4wMDAwMDApIHRyYW5zbGF0ZSgtNzAuNTAwMDAwLCAtNzAuNTAwMDAwKSB0cmFuc2xhdGUoMjEuMDAwMDAwLCAyMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJTaGFwZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNTAwMDAwLCA0OS41MDAwMDApIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtNDkuNTAwMDAwLCAtNDkuNTAwMDAwKSAiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0yKSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBmaWxsPSIjNEU0RTRFIiBjeD0iNjAuNTY4NzUiIGN5PSIzMy42ODc1IiByPSI0Ljc0Mzc1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMiIgZmlsbD0iIzRFNEU0RSIgY3g9IjM4LjQzMTI1IiBjeT0iMzMuNjg3NSIgcj0iNC43NDM3NSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGZpbGw9IiM0RTRFNEUiIGN4PSI2MC41Njg3NSIgY3k9IjQ5LjUiIHI9IjQuNzQzNzUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBmaWxsPSIjNEU0RTRFIiBjeD0iMzguNDMxMjUiIGN5PSI0OS41IiByPSI0Ljc0Mzc1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMiIgZmlsbD0iIzRFNEU0RSIgY3g9IjYwLjU2ODc1IiBjeT0iNjUuMzEyNSIgcj0iNC43NDM3NSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGZpbGw9IiM0RTRFNEUiIGN4PSIzOC40MzEyNSIgY3k9IjY1LjMxMjUiIHI9IjQuNzQzNzUiPjwvY2lyY2xlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                  style={{ height: '60px' }}
                  alt="farential"
                />
                <div class="icon-box-cont">
                  <h5 class="mb-0">Two Dice</h5>
                  <p class="mb-0">
                    Heads or tails? Fifty-fifty Heads or tails? Fifty-fifty
                  </p>
                </div>
              </div>
              <Link to="/coinflip" class="play-btn">
                Play Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Demo;
