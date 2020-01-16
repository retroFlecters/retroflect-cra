import React, { useEffect, useState } from "react";
import authService from "./services/auth";
import entriesService from "./services/entries";
import userSessionService from "./services/user-session";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import EntryView from "./components/EntryView";

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

  return (
    <div>
      <NavBar handleSignOut={handleSignOutRequest} user={user}></NavBar>
      <br />
      <SignInForm handleRequest={handleSignInRequest} />
      <br />
      <SignUpForm handleRequest={handleSignUpRequest} />
      <br />
      <EntryView entries={entries}></EntryView>
    </div>
  );
}

export default App;
