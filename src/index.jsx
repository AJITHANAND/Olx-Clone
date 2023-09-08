import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext } from "./Contexts/FirebaseContext";
import { Firebase } from "./firebase/config";
import Context from "./Contexts/User";
import Post from "./Contexts/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ Firebase }}>
      <Context>
        <Post>
          <App />
        </Post>
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
