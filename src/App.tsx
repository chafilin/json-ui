import "./App.css";
// import { ReactNode, createElement } from "react";
import initialComponents from "./assets/data.json";
import { ViewBuilder } from "./views/ViewBuilder";
import { Data } from "./types";
import "./App.css";

function App() {
  const data = initialComponents as Data;

  return (
    <div className="layout">
      <div className="layout_content">
        <ViewBuilder data={data} />
      </div>
    </div>
  );
}

export default App;
