import { Route, Routes } from "react-router";
import BaseLayout from "./components/baseLayout";
import Home from "./pages/home";

function App() {
  return (
    <div className="font-josefinSans">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
