import React, { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");

  const handleClick = (e) => {
    const value = e.target.value;
    setVal((prevVal) => prevVal + value);
  };
  const handleCalculate = () => {
        try {
      const result = new Function('"";return (' + val + ")")();
      console.log("Result:", result);
      setVal(result.toString());
    } catch (error) {
      setVal("Invalid");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <textarea type="text" defaultValue={val} readOnly/>
          </div>
          <div>
            <input type="button" value="AC" className="operator" onClick={() => setVal('')} />
            <input type="button" value="DE"  className="operator" onClick={() => setVal(val.slice(0, -1))}/>
            <input type="button" value="."  className="operator" onClick={handleClick} />
            <input type="button" value="/"  className="operator" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="7" className="number" onClick={handleClick} />
            <input type="button" value="8" className="number" onClick={handleClick} />
            <input type="button" value="9" className="number" onClick={handleClick} />
            <input type="button" value="*" className="operator" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="4" className="number" onClick={handleClick} />
            <input type="button" value="5" className="number" onClick={handleClick} />
            <input type="button" value="6" className="number" onClick={handleClick} />
            <input type="button" value="+" className="operator" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="1" className="number" onClick={handleClick} />
            <input type="button" value="2" className="number" onClick={handleClick} />
            <input type="button" value="3" className="number" onClick={handleClick} />
            <input type="button" value="-" className="operator" onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="00" className="number" onClick={handleClick} />
            <input type="button" value="0" className="number" onClick={handleClick} />
            <input type="button" value="=" className="equal" onClick={handleCalculate} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;



