import "./App.css";

import DrawingWindow from "./components/DrawingWindow";
import TriangleSideInputField from "./components/TriangleSideInputField";
import CalculateButton from "./components/CalculateButton";

const App = () => {
  return (
    <div className="App">
      <div className="calculator-container">
        <DrawingWindow />
        <TriangleSideInputField sideLetter="A" />
        <TriangleSideInputField sideLetter="B" />
        <TriangleSideInputField sideLetter="C" />
        <CalculateButton />
      </div>
    </div>
  );
};

export default App;
