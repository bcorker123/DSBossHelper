import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import About from "./About";
import NavBar from "./NavBar";
import UserHome from "./UserHome";
import CreateChar from "./CreateChar";
import Guide from "./Guide";

function App() {
  const [user, setUser] = useState({
    id: null,
    username: null,
    characters: [],
  });

  const [selectedChar, setSelectedChar] = useState({});

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

  function handleNewChar(newChar) {
    user.characters[user.characters.length] = newChar;
    const updatedUser = { ...user };
    setUser(updatedUser);
  }

  function selectChar(charId) {
    const character = user.characters.find(
      (character) => character.id === charId
    );
    setSelectedChar(character);
    history.push("/guide");
  }

  function handleUpdateSelectedChar(character) {
    setSelectedChar(character);
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
          <UserHome user={user} selectChar={selectChar} />
        </Route>
        <Route path="/guide/">
          <Guide
            selectedChar={selectedChar}
            handleUpdateSelectedChar={handleUpdateSelectedChar}
          />
        </Route>
        <Route path="/create-character">
          <CreateChar user={user} handleNewChar={handleNewChar} />
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
