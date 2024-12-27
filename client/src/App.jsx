import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ResetPage from "./pages/ResetPage";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<Login />} />
        
        {/* Route for Signup Page */}
        <Route path="/signup" element={<Signup />} />
        
        {/* Route for Reset Page */}
        <Route path="/reset" element={<ResetPage />} />
        
        {/* Route for MainPage (Where InfiniteScrollingCards_WEB is used) */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
