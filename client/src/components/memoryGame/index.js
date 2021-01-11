import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

export default function App() {
  const [options, setOptions] = useState(null)
  const [memScore, setmemScore] = useState(0)

  useEffect(() => {
    // Loads when the game starts
  }, [])

  return (
    <div>
      <div className="container">
        <h1>Memory Game</h1>
        <div>High Score: {highScore}</div>
        <div>
          {options === null ? (
            <>
              <button onClick={() => setOptions(12)}>Easy</button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  const prevOptions = options
                  setOptions(null)
                  setTimeout(() => {
                    setOptions(prevOptions)
                  }, 5)
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Main Menu</button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <MemoryGame
          options={options}
          setOptions={setOptions}
          memScore={memScore}
          setmemScore={setmemScore}
        />
      ) : (
        <h2>Choose a difficulty to begin!</h2>
      )}
    </div>
  )
}