import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body/Body";
import Introduce from "./components/Introduce";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="" element={<Navigate replace to="bat-dau" />} />
        <Route index path="bat-dau" element={<Body />} />
        <Route path="ve-chung-toi" element={<AboutUs />} />
        <Route path="gioi-thieu" element={<Introduce />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
