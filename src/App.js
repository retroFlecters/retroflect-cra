import React, { useEffect, useState } from "react";
import authService from "./services/auth";
import entriesService from "./services/entries";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import EntryView from "./components/EntryView";
import EntryAdd from "./components/EntryAdd";

function App() {
  const [user, setUser] = useState({});
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    entriesService.getAll().then(res => setEntries(res.data));
  }, []);

  const handleSignInRequest = async signInCredentials => {
    const res = await authService.signIn(signInCredentials);
    setUser(res.data);
    // redirect to "/" route
  };

  const handleSignUpRequest = async signUpCredentials => {
    const res = await authService.signUp(signUpCredentials);
    setUser(res.data);
    // redirect to "/" route
  };

  const handleSignOutRequest = async () => {
    await authService.signOut();
    setUser({});
    // redirect to "/" route
  };

  const handleNewEntry = async entry => {
    const res = await entriesService.create(entry);
    // redirect to "/" route
  };

  return (
    <div>
      <NavBar handleSignOut={handleSignOutRequest} user={user}></NavBar>
      <br />
      <SignInForm handleRequest={handleSignInRequest} />
      <br />
      <SignUpForm handleRequest={handleSignUpRequest} />
      <br />
      <EntryView entries={entries}></EntryView>
      <br />
      <EntryAdd handleNewEntry={handleNewEntry} />
    </div>
  );
}

export default App;
