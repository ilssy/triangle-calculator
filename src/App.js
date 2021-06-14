import "./App.css";
import { useState } from "react";

import DrawingWindow from "./components/DrawingWindow";
import NumberForm from "./components/NumberForm";

const App = () => {
  // TODO: refactor code more concisely (use map())
  const [sideValueA, setSideValueA] = useState(5);
  const [sideValueB, setSideValueB] = useState(5);
  const [sideValueC, setSideValueC] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      <div className="calculator-container">
        <DrawingWindow
          sideValueA={sideValueA}
          sideValueB={sideValueB}
          sideValueC={sideValueC}
          submitted={submitted}
        />
        <NumberForm
          sideValueA={sideValueA}
          setSideValueA={setSideValueA}
          sideValueB={sideValueB}
          setSideValueB={setSideValueB}
          sideValueC={sideValueC}
          setSideValueC={setSideValueC}
          setSubmitted={setSubmitted}
        />
      </div>
    </div>
  );
};

export default App;
