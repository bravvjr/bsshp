import React from 'react';
import './style.css';
import TypesOfShips, {
    Battleship,
    Carrier,
    Cruiser,
    Destroyer,
    Submarine,
  } from "./TypesOfShips";
  // import AnimBoard from './AnimBoard';
  
function AboutGame() {
    return ( 
      <div className='aboutgame'>
        <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-12 text-center"
              data-aos="fade-down"
              data-aos-delay="50"
            >
              <div className="section-title">
                <h1 className="display-4 fw-semibold">About Game</h1>
                <div className="line"></div>
                <p>
                  Battleship is a two-player war-themed board game where
                  opponents try to guess the location of each other's warships
                  and then sink them. A paper and pencil version of the game
                  dates back to World War I, but most people are familiar with
                  Battleship through the plastic board game first marketed by
                  the Milton Bradley Company in 1967 and now produced by Hasbro.
                  Since the launch of the original board game, more Battleship
                  variations have become popular, including video games and
                  smartphone apps. But, throughout Battleship history, the rules
                  for playing have remained relatively the same. So, how do you
                  play Battleship?
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">
              {/* <img
                src="./public/images/pexels-ketut-subiyanto-4559603.jpg"
                alt=""
              /> */}

              {/* board */}
              <div className="battleship_board">
                <h1>Game Board</h1>
                <p>
                  The Battleship Game Board is a 10x10 grid where each cell
                  represents a unique coordinate for targeting and positioning
                  ships. The horizontal axis (X-axis) is labeled with the
                  letters A to J, while the vertical axis (Y-axis) is labeled
                  with the numbers 1 to 10. This setup allows for precise
                  targeting of each square by combining a letter and a number,
                  such as A1 for the top-left corner or J10 for the bottom-right
                  corner. Players use these coordinates to locate enemy ships
                  and to record hits and misses during gameplay. Each player's
                  board will contain a fleet of ships placed strategically
                  across the grid, and the objective is to guess the coordinates
                  of the opponent's ships, attempting to sink them all before
                  your own fleet is destroyed.
                </p>

                {/* Column Labels (A-J) */}
                <div className="board-header"></div>
                <div className="row">
                  <div className="cell header"></div>
                  <div className="cell header">A</div>
                  <div className="cell header">B</div>
                  <div className="cell header">C</div>
                  <div className="cell header">D</div>
                  <div className="cell header">E</div>
                  <div className="cell header">F</div>
                  <div className="cell header">G</div>
                  <div className="cell header">H</div>
                  <div className="cell header">I</div>
                  <div className="cell header">J</div>
                </div>

                {/* Rows 1-10 */}
                <div className="row">
                  <div className="cell header">1</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">2</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">3</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">4</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">5</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">6</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">7</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">8</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">9</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="row">
                  <div className="cell header">10</div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5">
              <h1>Types Of Ships</h1>
              <p className="mt-3 mb-4">
                There are 5 types of ships available in this game.They include
                the following:
              </p>
              <div className="d-flex pt-4 mb-3">
                {/* <div className="iconbox me-4">
                </div> */}
                <div>
                  <h5>Carrier</h5> <Carrier />
                  <p>
                    The largest ship in the fleet, designed to carry and launch
                    aircraft. It has high durability but moves slowly across the
                    board as it occupies 5 cells on the board.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                {/* <div className="iconbox me-4">
                  <i className="ri-user-5-fill"></i>
                </div> */}
                <div>
                  <h5>Battleship</h5> <Battleship />
                  <p>
                    A heavily armed and armored ship. It’s strong and can
                    withstand multiple hits, making it a formidable force on the
                    battlefield as it occupies 4 cells on the board.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* <div className="iconbox me-4">
                  <i className="ri-rocket-2-fill"></i>
                </div> */}
                <div>
                  <h5>Cruiser</h5>
                  <Cruiser />
                  <p>
                    A versatile mid-sized ship, balanced in speed and
                    durability. It’s capable of quick maneuvers and provides
                    solid firepower as it occupies 3 cells on the board.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* <div className="iconbox me-4">
                  <i className="ri-rocket-2-fill"></i>
                </div> */}
                <div>
                  <h5>Submarine</h5>
                  <Submarine />
                  <p>
                    A stealthy, smaller vessel that can go undetected. It’s
                    vulnerable if found but hard to locate on the board as it
                    occupies 3 cells on the board.{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex">
                {/* <div className="iconbox me-4">
                  <i className="ri-rocket-2-fill"></i>
                </div> */}
                <div>
                  <h5>Destroyer</h5>
                  <Destroyer />
                  <p>
                    A small, fast, and agile ship. It’s the quickest in the
                    fleet, suitable for scouting and launching surprise attacks
                    as it occupies 2 cells on the board.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <AnimBoard /> */}
        </div>
      </section>
      </div>


     );
}

export default AboutGame;