import TriangleSideInputField from "./TriangleSideInputField";
import CalculateButton from "./CalculateButton";

const NumberForm = ({
  sideValueA,
  setSideValueA,
  sideValueB,
  setSideValueB,
  sideValueC,
  setSideValueC,
  setSubmitted,
}) => {
  // TODO: refactor code more concisely (use map())
  // TODO: fix Calculate button so that the submitted state is reset after each submission (back to submitted = false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TriangleSideInputField
        name="sideValueA"
        type="number"
        sideLetter="A"
        value={sideValueA}
        onChange={(e) => setSideValueA(e.target.value)}
        required
      />
      <TriangleSideInputField
        name="sideValueB"
        type="number"
        sideLetter="B"
        value={sideValueB}
        onChange={(e) => setSideValueB(e.target.value)}
        required
      />
      <TriangleSideInputField
        name="sideValueC"
        type="number"
        sideLetter="C"
        value={sideValueC}
        onChange={(e) => setSideValueC(e.target.value)}
        required
      />
      <CalculateButton />
    </form>
  );
};

export default NumberForm;
