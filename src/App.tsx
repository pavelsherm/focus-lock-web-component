import "./styles.css";
import ReactFocusLock from "react-focus-lock";

class InputOpen extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open", delegatesFocus: false });
    const input = document.createElement("input");
    input.setAttribute("id", "open-input");
    shadow.appendChild(input);
  }
}

class InputClose extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    const input = document.createElement("input");
    shadow.appendChild(input);
  }
}

customElements.define("my-input-open", InputOpen);
customElements.define("my-input-close", InputClose);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReactFocusLock
        lockProps={{ id: "focus-lock" }}
        crossFrame={false}
        disabled={false}
      >
        <input />
        <my-input-open />
        <my-input-close />
      </ReactFocusLock>
    </div>
  );
}
