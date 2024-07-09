import "./App.css";
import "./components/CreateUser";
import CreateUser from "./components/CreateUser";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  // App Section //
  return (
    <>
      <UserForm />
      <UserList />
      <CreateUser />
    </>
  );
};

export default App;
