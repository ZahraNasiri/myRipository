import React, { useEffect, useState } from "react";
import SingleUser from "../singleUser/SingleUser";
import _ from "lodash";
import styles from "./styles.module.scss";
import request from "../../../utils/request/request";
import { getListUsers, getFormUser } from "../../../utils/urls";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

const ListUsers = ({ statusCode, error }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [newUser, setNewUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    request(getListUsers, "get", { page: page }).then((value) => {
      setUsers(value.data);
    });
  }, []);

  function nextPage() {
    request(getListUsers, "get", { page: page + 1 }).then((value) => {
      setUsers(value.data);
    });
    setPage(page + 1);
  }

  function goToCreateUser() {
    router.push("/users/create");
  }

  return (
    <div className={styles["list-user-holder"]}>
      <div className={styles["title"]}>Hello ReqRes users!</div>
      <div className={styles["list-user"]}>
        {users.map((user) => (
          <SingleUser key={user.id} user={user} />
        ))}
      </div>
      <div className={styles["pagination-holder"]}>
        <Button variant="contained" onClick={nextPage}>
          page: {page}
        </Button>
      </div>
      <div className={styles["form-user-button-holder"]}>
        <Button variant="contained" onClick={goToCreateUser}>
          Go To Create User!
        </Button>
      </div>
    </div>
  );
};

export default ListUsers;
