import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

let fn = () => {
  return <div>Salom</div>;
};

<fn />;

createRoot(document.getElementById("root")).render(<App />);
