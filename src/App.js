import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/tasklist";
import SignUp from "./components/SignUp/index.tsx";
import { GoogleLogin } from "@react-oauth/google";

function App() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <TaskList /> */}
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default App;
