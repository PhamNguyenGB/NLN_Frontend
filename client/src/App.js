import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer";
import UserRoute from "./routes/userRoute";
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body" style={{ marginBottom: '100px' }}>
          <UserRoute />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
