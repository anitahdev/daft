import LogInPage from "./components/LogInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Router>
      <LogInPage />
    </>
  );
}

export default App;
