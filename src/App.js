import React from 'react';
import './App.css';
import Tesseract from "tesseract.js";



const loadData = async () => {
  const result = await Tesseract.recognize(
    "https://i.iib.co/VHb6y10/Artboard-1.png",
    "eng",
    {logger: m => console.log(m)}
    );
    console.log(result);
}

loadData();

function App() {
  return (
    <div className="App">
      <img src="https://i.ibb.co/LpxDvR1/logo.png" className="logo" />
      <div className="container">
        <div className="image-wrapper">
          <form>
            <input type="file" className="custom-file-input" name="image" />
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
