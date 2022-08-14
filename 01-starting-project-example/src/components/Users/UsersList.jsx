import Card from "../UI/Card";
import styles from "./UsersList.module.css";
const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {Array.isArray(users) &&
          users.map(user => (
            <li key={user.id}>
              Name {user.name} Age {user.age}
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default UsersList;
