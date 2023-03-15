import "./App.css";
import { updateColor, useColor } from "./data/colorContext";

function App() {
  const { state, dispatch } = useColor();
  const { color } = state;

  return (
    <div className="App">
      <div className="container">
        <div className="block" style={{ backgroundColor: color }} />
        <div className="actions">
          <button onClick={() => updateColor(dispatch, "green")}>Green</button>
          <button onClick={() => updateColor(dispatch, "purple")}>Purple</button>
          <button onClick={() => updateColor(dispatch, "orange")}>Orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
