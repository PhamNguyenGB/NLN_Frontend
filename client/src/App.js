import Header from "./components/Navigation/Header";
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
        <div className="App-body">
          <UserRoute />
        </div>
      </div>
    </Router>
  );
}

export default App;
