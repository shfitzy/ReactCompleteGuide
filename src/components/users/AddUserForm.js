import { useState, useRef } from "react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";

import styles from "./AddUserForm.module.css";

const AddUserForm = ({ addUserListener }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUser = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (name.trim() === "" || +age <= 0) {
      setError({
        title: "An error occurred",
        message: "Please enter a valid name and age.",
      });
    } else {
      addUserListener(name, age);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  const confirmError = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUserForm;
