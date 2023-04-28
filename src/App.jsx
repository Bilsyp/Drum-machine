import { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [volume, setVolume] = useState(20);
  const [text, setText] = useState("");

  const options = [
    {
      char: "W",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      keycode: 87,
    },
    {
      char: "A",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keycode: 65,
    },
    {
      char: "Q",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keycode: 81,
    },
    {
      char: "D",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keycode: 68,
    },
    {
      char: "S",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keycode: 83,
    },
    {
      char: "E",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keycode: 69,
    },
    {
      char: "Z",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      keycode: 90,
    },
    {
      char: "C",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keycode: 67,
    },
    {
      char: "X",
      mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      keycode: 88,
    },
  ];
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      handle(e.key.toUpperCase());
    });
  }, [volume]);
  const getkeyCode = (char) => {
    return char.charCodeAt(0);
  };
  const handle = (selector) => {
    const audio = document.getElementById(selector);
    const boxs = document.getElementById(getkeyCode(selector));

    if (audio === null) {
      return "";
    } else {
      audio.play();
      audio.volume = volume / 100;
      boxs.classList.add("active");

      setTimeout(() => {
        boxs.classList.remove("active");
      }, 250);
      setText(selector);
    }
  };
  return (
    <main id="drum-machine">
      <div className="containers">
        {options.map((res, idx) => {
          return <Box key={idx} char={res} />;
        })}
      </div>
      <div className="option">
        <h2>Volume </h2>
        <input
          min={1}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          type="range"
        />
        <span>{volume}</span>

        <div id="display">
          <h2> {text}</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
