import Header from "./components/Header";
import home from "./pages/home";
import cadastro from "./pages/cadastro";
import login from "./pages/login";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/settings.css";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/cadastro" component={cadastro} />
        <Route path="/login" component={login} />
      </Switch>

      <Footer>
        <p>Desenvolvido por João Stael</p>
      </Footer>
    </Router>
  );
}

export default App;
