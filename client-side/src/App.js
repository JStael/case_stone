import Header from "./components/Header";
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './styles/settings.css';

function App() {

  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
      </Switch>

      <Footer>
        <p>Desenvolvido por João Stael</p>
      </Footer>
    </Router>
  );
}

export default App;
