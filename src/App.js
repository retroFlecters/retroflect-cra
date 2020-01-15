import React, { useEffect, useState } from "react";
import authService from "./services/auth";
import entriesService from "./services/entries";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import EntryView from "./components/EntryView";
import EntryControls from "./components/EntryControls";

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
      <NavBar handleSignOut={handleSignOutRequest} user={user}></NavBar>
      <div className="col-12">
        <h1>retroFlect</h1>
      </div>
      <div className="col-12">
        <SignInForm handleRequest={handleSignInRequest} />
        <br></br>
        <br></br>
        <SignUpForm handleRequest={handleSignUpRequest} />
        <br></br>
        <br></br>
        <EntryControls></EntryControls>
        <EntryView entries={entries}></EntryView>
      </div>
    </div>
  );
}

export default App;
