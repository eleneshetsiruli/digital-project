import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UseAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  async function Login(email, password) {
    let res;

    try {
      res = await axios({
        method: "post",
        url: "https://api.escuelajs.co/api/v1/auth/login",
        data: {
          email,
          password,
        },
      });
    } catch (e) {
      console.log(e);
    }
    navigate("/");
  }

  async function Signin({ name, password, email, avatar }) {
    try {
      const res = await axios({
        method: "post",
        url: `https://api.escuelajs.co/api/v1/users/`,
        body: {
          name,
          email,
          password,
          avatar,
        },
      });

      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  }

  return {
    auth: {
      ...auth,
      isAuthed: !!auth.token,
    },
    Login,
    Signin,
  };
};
