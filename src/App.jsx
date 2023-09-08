import { Route } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import { AuthContext } from "./Contexts/User";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { FirebaseContext } from "./Contexts/FirebaseContext";
function App() {
  const { user, setUser } = useContext(AuthContext);
  const { Firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const auth = getAuth(Firebase);
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    // console.log(user);
  }, [user]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view" element={<ViewPost />} />
          <Route path="/post" element={<CreatePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
