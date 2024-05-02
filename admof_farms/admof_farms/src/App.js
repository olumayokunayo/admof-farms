import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
    </Router>
  );
}

export default App;
