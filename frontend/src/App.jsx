import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
// import HomePage from "./pages/Home/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* <Route path="/" element={<HomePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
