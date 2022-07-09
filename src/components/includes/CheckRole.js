import { useEffect, useState } from "react";
import axios from "axios";

export const CheckRole = ({ role, element }) => {
  // * Variables * //
  const [userData, setUserData] = useState();

  // * Get User Data * //
  useEffect(() => {
    axios
      .post("http://localhost:8080/auth")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (userData) {
    if (userData.user) {
      if (role) {
        if (userData.data.account.role === role) return element;
        else window.location.href = "/";
      } else return element;
    } else {
      window.location.href = "/login";
    }
  }
};
