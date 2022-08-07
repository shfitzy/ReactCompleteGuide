import { useState } from "react";

import AddUserForm from "./components/users/AddUserForm";
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserListener = (name, age) => {
    setUsers(prevUsers => [...prevUsers, {name: name, age: age}]);
  }

  return (
    <>
      <AddUserForm addUserListener={addUserListener}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
