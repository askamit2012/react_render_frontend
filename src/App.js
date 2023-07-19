import { useState } from "react";
import "./App.css";
import TaskList from "./components/tasklist";
import SignUp from "./components/SignUp/index.tsx";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const responseMessage = (response) => {
    console.log(response);
    setIsUserLoggedIn(true);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <Login /> */}
      {isUserLoggedIn && <TaskList />}
      {!isUserLoggedIn && (
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      )}
    </div>
  );
}

export default App;
