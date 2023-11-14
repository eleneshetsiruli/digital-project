import { useState } from "react";
import { UseAuth } from "../Hooks/UseAuth";

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { Login } = UseAuth();

  return (
    <div className=" gap-2  flex items-center flex-col align-center">
      <input
        onChange={(ev) => setData({ ...data, email: ev.target.value })}
        value={data.email}
        className="rounded-[5px]"
        type="email"
        placeholder="email"
      />
      <input
        onChange={(ev) => setData({ ...data, password: ev.target.value })}
        className="rounded-[5px]"
        value={data.password}
        type="password"
        placeholder="password"
      />
      <button
        onClick={() => {
          Login(data.email, data.password);
        }}
        className=" w-[140px] rounded-[10px]  bg-blue-200"
      >
        login
      </button>
    </div>
  );
};
