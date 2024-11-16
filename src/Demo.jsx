// import { Player1Board, Player2Board } from "./PlayerBoard";

import Battleship from "./Battleship";

function Demo() {
  return (
    <section id="demo" className="section-padding">
      <div className="container">
        <div
          className="col-12 text-center"
          data-aos="fade-down"
          data-aos-delay="50"
        >
          <div className="section-title">
            <h1 className="display-4 fw-semibold">Gameplay Demo</h1>
            <div className="line"></div>
            <p>
              This Battleship demo provides an interactive experience of the
              classic naval strategy game. You'll control one side of the board,
              while the computer takes on the role of your opponent. To begin,
              you'll place your ships on your board by clicking on the squares.
              At the moment you can only place your ships vertically once all your ships are positioned, press "start game" button to start the game. You'll then
              alternate turns with the computer, firing shots at each other's
              fleets. To fire, simply click on a square on your board. If you
              hit a ship, it will be marked with a red square around it. If you miss a message with "miss" will be displayed
              . The goal is to sink all of your opponent's
              ships before they sink yours. The demo visualizes the game state,
              highlights valid moves, and provides feedback on each turn, making
              it easy to understand and enjoy.
            </p>
          </div>
        </div>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-15" data-aos="fade-down" data-aos-delay="50">
            {/* board */}
            <Battleship />
          </div>
          {/* <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5"> */}
          {/* </div> */}
        </div>
        {/* <AnimBoard /> */}
      </div>
    </section>
  );
}

export default Demo;
