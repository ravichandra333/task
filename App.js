import React, { useState } from "react";
import './App.css';

function TextDisplayWindow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Sample text 1",
    "Sample text 2",
    "Sample text 3",
    // Add more texts here
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, texts.length - 1));
  };

  return (
    <div>
      <div className="text-display-panel">{texts[currentIndex]}</div>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex === texts.length - 1}>
        Next
      </button>
    </div>
  );
}

export default TextDisplayWindow;
