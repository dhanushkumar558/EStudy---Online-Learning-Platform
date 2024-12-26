
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ResetPage from "./pages/ResetPage";
import MainPage from "./pages/MainPage";


// Adjusted import for MainPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/main" element={<MainPage />} />
      
       
      </Routes>
    </Router>
  );
};

export default App;
