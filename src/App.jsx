import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./utils/ContextApi.jsx";
import TestComponent from "./components/test/index.jsx";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<TestComponent />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
