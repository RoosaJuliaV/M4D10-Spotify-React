import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from './pages/Home';
import Album from './pages/Album';
import Artist from './pages/Artist';
import SideBar from "./components/SideBar"
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
    <Router>
    <div
    >
      <SideBar title="Spotify" color="dark" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/album" exact component={Album} />
        <Route path="/artist" exact component={Artist} />
      </Switch>
      <Footer />
    </div>
    </Router>
  )
}

export default App