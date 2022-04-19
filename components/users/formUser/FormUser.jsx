import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, TextField } from "@material-ui/core";
import { userMessages } from "../i18n/userMessages";
import request from "../../../utils/request/request";
import { createUser } from "../../../utils/urls";

const FormUser = () => {
  function onsubmit() {
    const body = {
      name: name,
      job: job,
    };
    request(createUser, "post", body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  return (
    <div>
      <div className={styles["title"]}> Add User Form:</div>
      <form className={styles["form-holder"]} noValidate autoComplete="off">
        <div className={styles["text-field-holder"]}>
          <TextField
            className={["text-field"]}
            id="outlined-basic1"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles["text-field-holder"]}>
          <TextField
            id="outlined-basic2"
            label="Job"
            variant="outlined"
            value={job}
            onChange={(e) => {
              setJob(e.target.value);
            }}
          />
        </div>
      </form>
      <div className={styles["submit"]}>
        <Button variant="contained" onClick={onsubmit}>
          {userMessages.SUBMIT}
        </Button>
      </div>
    </div>
  );
};

export default FormUser;
