import "./App.css";
// import { ReactNode, createElement } from "react";
import initialComponents from "./assets/data.json";
import { ViewBuilder } from "./views/ViewBuilder";
import "./App.css";
import { ComponentsContext, TreeContext } from "./Context";
import { Root } from "./types";
import { useState } from "react";
import { transformData } from "./helpers/transformData";
import { InputView } from "./views/InputView";

function App() {
  const data = initialComponents as Root;

  const [state, setState] = useState(transformData(data));

  return (
    <TreeContext.Provider value={state.tree}>
      <ComponentsContext.Provider value={state.components}>
        <div className="layout">
          <div className="layout_textarea">
            <InputView setState={setState} initialData={data} />
          </div>
          <div className="layput_content">
            <ViewBuilder />
          </div>
        </div>
      </ComponentsContext.Provider>
    </TreeContext.Provider>
  );
}

export default App;
