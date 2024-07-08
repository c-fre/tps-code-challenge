import "./App.css";
import "./components/CreateUser";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

const App = () => {
  // App Section //
  return (
    <>
      <UserList />
      <CreateUser />
    </>
  );
};

export default App;
