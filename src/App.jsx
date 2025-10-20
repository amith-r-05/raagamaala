import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./styles/App.css";

function App() {
  return (
    <div className="relative h-full w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
