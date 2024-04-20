import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div id='parent' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 bg-pink-200 text-center rounded-md">
      <h1 className="text-5xl text-white py-3">{counter}</h1>

      <div>
        <button onClick={() => setCounter(counter + 1)} className="bg-green-400 px-5 py-2.5 cursor-pointer m-2">
          Increment
        </button>
        <button onClick={() => setCounter(counter - 1)} 
         disabled={counter === 0}className="bg-red-500 px-5 py-2.5 cursor-pointer m-2">
          Decrement
        </button>
        <button onClick={() => setCounter(0)} 
       
        className="bg-blue-300 px-5 py-2.5 cursor-pointer m-2">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
