import { Route, Routes } from "react-router";
import BaseLayout from "./components/baseLayout";
import Home from "./pages/home";
import SearchPage from "./pages/search";

function App() {
  return (
    <div className="font-josefinSans">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Home />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
