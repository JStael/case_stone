import Main from "../components/Main/index";
import { Redirect, Route } from "react-router-dom";

function Home() {
  const logado = !!localStorage.getItem("auth_token");
  return (
    <Route
      render={(props) =>
        logado ? <Main /> : <Redirect to={{ pathname: "/login" }} />
      }
    />
  );
}

export default Home;
