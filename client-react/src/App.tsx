import "./App.css";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  // App Section //
  return (
    <div>
      <h1> Title Of Site </h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
