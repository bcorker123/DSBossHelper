import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import About from "./About";
import NavBar from "./NavBar";
import UserHome from "./UserHome";

function App() {
  const [user, setUser] = useState({
    id: null,
    username: null,
  });

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((error) => console.log(error));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  const history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    });
    setUser({
      id: null,
      username: null,
    });
    history.push("/");
  }

  return (
    <div className="App">
      <NavBar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <LoginForm handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <SignupForm handleLogin={handleLogin} />
        </Route>
        <Route path="/user-home">
          <UserHome />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
