import { Route, Routes } from "react-router-dom";
import "@assets/css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// ? import views for routes
import Home from "@views/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
