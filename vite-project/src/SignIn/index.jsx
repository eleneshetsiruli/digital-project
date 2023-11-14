import React, { useState } from "react";
import { UseAuth } from "../Hooks/UseAuth";

export const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    avatar: "https://picsum.photos/800",
  });

  const { Signin } = UseAuth();
  return (
    <div className="flex flex-col gap-10 w-[600px] items-center bg-green-300 rounded-[20px]">
      <h1 className="text-green-600">REGISTRATION ⬇️ </h1>
      <img
        className="w-[60px]"
        src="https://icons.iconarchive.com/icons/iconarchive/robot-avatar/256/Green-3-Robot-Avatar-icon.png"
        alt="avatar"
      />

      <input
        onChange={(ev) => setData({ ...data, name: ev.target.value })}
        value={data.name}
        type="text"
        placeholder="name"
      />
      <input
        onChange={(ev) => setData({ ...data, email: ev.target.value })}
        value={data.email}
        type="email"
        placeholder="email"
      />
      <input
        onChange={(ev) => setData({ ...data, password: ev.target.value })}
        type="password"
        placeholder="password"
        value={data.password}
      />
      <button
        onClick={() => Signin(data)}
        className="bg-green-600 w-40 rounded-[20px] text-white"
      >
        submit
      </button>
    </div>
  );
};
