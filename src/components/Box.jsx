import React from "react";

function Box({ char }) {
  return (
    <div id={char.keycode} className="Box drum-pad">
      <h2>{char.char}</h2>
      <audio id={char.char} src={char.mp3}></audio>
    </div>
  );
}

export default Box;
