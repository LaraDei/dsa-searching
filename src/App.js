import React, { useState, useEffect } from 'react'
import Search from './search-alg'
import './App.css';

function App() {
  const data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 
    53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 
    72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 
    16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 
    91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 
    64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 
    43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 
    51, 54, 84, 34, 53, 78, 40, 14, 5,]
    
  const { indexOf, binarySearch } = Search;

  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(
    () => {
      console.log({ value, result });
    },
    [result]
  )

  return (
    <div className="App">
       <input
        onInput={e => setValue(parseInt(e.target.value))}
        onChange={e => setValue(parseInt(e.target.value))}
        placeholder="search"
        type="number"
      />
      <button
        onClick={() => {
          const res = indexOf(data, value);

          setResult(res);
          setSearchCount(res);
        }}
      >
        linear
      </button>
      <button
        onClick={() => {
          const res = binarySearch(data, value, 0, data.length - 1);

          setResult(res.index);

          setSearchCount(res.path.length);
        }}
      >
        binary
      </button>
      <div>
        {result == 0 ? "nothing to display" : result}. found in {searchCount}{" "}
        searches.
      </div>
    </div>
  );
}

export default App;
