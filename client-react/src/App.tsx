import "./App.css";
import "./components/CreateUser";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

const App = () => {
  // App Section //
  return (
    <>
      <CreateUser />
      <UserList />
    </>
  );
};

export default App;
