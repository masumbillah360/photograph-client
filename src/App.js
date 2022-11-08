import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Router";

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
