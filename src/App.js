import React, { useEffect, useState } from "react";
import authService from "./services/auth";
import entriesService from "./services/entries";
import userSessionService from "./services/user-session";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import EntryView from "./components/EntryView";
import EntryAdd from "./components/EntryAdd";
import EntryControls from "./components/EntryControls";

function App() {
  const [user, setUser] = useState({});
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    entriesService.getAll().then(res => setEntries(res.data));
    setUser(userSessionService.getUser() || {});
  }, []);

  const handleSignInRequest = async signInCredentials => {
    const res = await authService.signIn(signInCredentials);
    userSessionService.setUser(res.data);
    setUser(res.data);
    // redirect to "/" route
  };

  const handleSignUpRequest = async signUpCredentials => {
    const res = await authService.signUp(signUpCredentials);
    userSessionService.setUser(res.data);
    setUser(res.data);
    // redirect to "/" route
  };

  const handleSignOutRequest = async () => {
    await authService.signOut();
    userSessionService.removeUser();
    setUser({});
    setEntries([]);
    // redirect to "/" route
  };

  const handleNewEntry = async entry => {
    const res = await entriesService.create(entry);
    setEntries(entries.concat(res.data))
    // redirect to "/" route
  };

  return (
    <div>
      <NavBar handleSignOut={handleSignOutRequest} user={user}></NavBar>
      <div className="col-12">
        <div className="jumbotron">
          <SignInForm handleRequest={handleSignInRequest} />
          <br></br>
          <br></br>
          <SignUpForm handleRequest={handleSignUpRequest} />
        </div>
        <br></br>
        <br></br>
        <hr></hr>
        <EntryView entries={entries}></EntryView>
        <br />
        <EntryAdd handleNewEntry={handleNewEntry} />
      </div>
    </div>
  );
}

export default App;
