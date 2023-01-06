import { useState } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState([]);
  const [correctColor, setCorrectColor] = useState();
  const [answer, setAnswer] = useState("");
  function generateHexColors() {
    setAnswer("");
    let generatedColors = [];
    for (let i = 0; i < 3; i++) {
      generatedColors.push(Math.floor(Math.random() * 16777215).toString(16));
    }
    setColors(generatedColors);
    setCorrectColor(generatedColors[Math.floor(Math.random() * 4)]);
  }

  function checkAnswer(hexColor) {
    if (hexColor === correctColor) {
      setAnswer("CORRECT");
    } else {
      setAnswer("INCORRECT");
    }
  }
  console.log(colors);
  return (
    <div className="flex flex-col max-w-2xl gap-6">
      <button
        className="p-2 text-white bg-slate-600 text-2xl w-fit mt-2 mx-auto rounded-lg"
        onClick={() => generateHexColors()}
      >
        Generate Colors
      </button>
      <div
        className="w-36 h-36 m-auto"
        style={{ backgroundColor: `#${correctColor}` }}
      ></div>
      <div className={`flex items-center justify-around`}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => checkAnswer(color)}
            className="p-2 bg-gray-400 text-black text-xl uppercase rounded-xl"
          >
            {`#${color}`}
          </button>
        ))}
      </div>
      <div className="mx-auto text-2xl uppercase font-extrabold">
        {answer !== "" ? (
          answer === "CORRECT" ? (
            <span className="text-green-600">
              Correct, Generate another color
            </span>
          ) : (
            <span className="text-red-500">Incorrect, try again</span>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
