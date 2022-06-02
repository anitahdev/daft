import LogInPage from "./components/LogInPage";
import MyAppBar from "./components/MyAppBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <MyAppBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="" element={<Home />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
