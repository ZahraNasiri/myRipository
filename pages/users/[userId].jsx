import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import SingleUser from "../../components/users/singleUser/SingleUser";
import request from "../../utils/request/request";
import { getSingleUser } from "../../utils/urls";

const SingleUserDetail = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    if (router.isReady) {
      let temp = _.get(router, "query.userId", 0);
      request(`${getSingleUser}${temp}`, "get")
        .then((value) => setUser(value.data))
        .catch((err) => console.log(err));
    }
  }, [router]);

  return (
    <div>
      <SingleUser key={user.id} user={user} />
    </div>
  );
};

export default SingleUserDetail;
