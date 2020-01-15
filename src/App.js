import React, { useEffect, useState } from "react";
import authService from "./services/auth";
import entriesService from "./services/entries";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import EntryView from "./components/EntryView";

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

  return (
    <div>
      <NavBar handleSignOut={handleSignOutRequest}></NavBar>
      <h1>retroFlect</h1>
      <h2>{user.firstName} is signed in.</h2>
      <SignInForm handleRequest={handleSignInRequest} />
      <br></br>
      <br></br>
      <SignUpForm handleRequest={handleSignUpRequest} />
      <br></br>
      <br></br>
      <EntryView entries={entries}></EntryView>
    </div>
  );
}

export default App;
