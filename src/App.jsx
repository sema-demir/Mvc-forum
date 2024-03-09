import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderView from "./components/Header/HeaderView";
import ListController from "./pages/List/ListController";
import CreateController from "./pages/Cerate/CreateController";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />

      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/create" element={<CreateController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
