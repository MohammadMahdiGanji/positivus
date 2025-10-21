// import dependency
import { type JSX } from "react";

// import component
import Home from "./page/home";

function App(): JSX.Element {
  return (
    <div className="font-regular">
      <Home />
    </div>
  );
}

export default App;
