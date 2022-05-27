import LogInPage from "./components/LogInPage";
import MyAppBar from "./components/MyAppBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <MyAppBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}
