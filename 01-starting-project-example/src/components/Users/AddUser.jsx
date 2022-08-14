import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = ({ onGetData }) => {
  const [enteredUser, setEnteredUser] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState();
  const userNameChangeHandler = e => {
    setEnteredUser(prevState => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const userAgeChangeHandler = e => {
    setEnteredUser(prevState => ({
      ...prevState,
      age: +e.target.value,
    }));
  };

  const addUserHandler = e => {
    e.preventDefault();
    if (enteredUser.name.trim().length === 0 || enteredUser.age === 0) {
      return setError({ title: "Error", message: "Set name" });
    }
    if (enteredUser.age < 1) {
      return setError({ title: "Error", message: "Set valid age" });
    }
    onGetData(enteredUser);
    setEnteredUser({
      name: "",
      age: "",
    });
  };
  const cancelErrorHandler = () => {
    setError(undefined);
  };
  return (
    <>
      {error && (
        <ErrorModal
          onConfirm={cancelErrorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={e => addUserHandler(e)}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            value={enteredUser.name}
            type="text"
            onChange={userNameChangeHandler}
          />
          <label htmlFor="userage">Age</label>
          <input
            id="userage"
            value={enteredUser.age}
            type="number"
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
