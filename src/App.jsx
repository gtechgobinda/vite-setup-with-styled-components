import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestComponent from "./components/test/index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
