import { createRoot } from "react-dom/client";
import { Student } from "./Props"; // Capitalized

createRoot(document.getElementById("beru")).render(
  <>
    <h1>Nimmouna</h1>
    <Student />
  </>
);
