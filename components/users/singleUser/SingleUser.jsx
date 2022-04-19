import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.scss";
import Link from "next/link";

const SingleUser = ({ user = {} }) => {
  const { first_name = "", email = "", avatar = "", id = 0 } = user;
  return (
    <Link href={`/users/${id}`}>
      <div className={styles["single-user-holder"]}>
        <div className={styles["first-name"]}>{first_name}</div>
        <div className={styles["email"]}>{email}</div>
        <img className={styles["avatar"]} src={avatar} />
      </div>
    </Link>
  );
};

export default SingleUser;
