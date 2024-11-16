import React from "react";
import "./ships2.css";

function Ships() {
  return (
    <div className="SHIPS">
              <p>Carrier</p>

      <div className="row">

        <div className="carriercell"></div>
        <div className="carriercell"></div>
        <div className="carriercell"></div>
        <div className="carriercell"></div>
        <div className="carriercell"></div>
      </div>

        <p>Battleship</p>

      <div className="row">
        <div className="battleshipcell"></div>
        <div className="battleshipcell"></div>
        <div className="battleshipcell"></div>
        <div className="battleshipcell"></div>
      </div>
      <p>Cruiser</p>

      <div className="row">
        <p></p>
        <div className="cruisercell"></div>
        <div className="cruisercell"></div>
        <div className="cruisercell"></div>
      </div>

      <p>Submarine</p>
      <div className="row">
        <div className="submarinecell"></div>
        <div className="submarinecell"></div>
        <div className="submarinecell"></div>
      </div>

      <p>Destroyer</p>
      <div className="row">
        <div className="destroyercell"></div>
        <div className="destroyercell"></div>
      </div>
    </div>
  );
}

export default Ships;
