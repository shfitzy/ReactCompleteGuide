import Card from "../ui/Card";

import styles from './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{`${user.name} - (${user.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
