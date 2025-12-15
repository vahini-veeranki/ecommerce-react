// src/SignIn.js
import React, { useState } from "react";

const SignIn = () => {
  const [data, setData] = useState({ name: "", phone: "", email: "" });

  const submit = () => {
    alert("Sign-in successful!");
  };

  return (
    <div className="page signin-container">
      <div className="form signin-box">
        <h1>Sign In</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <button onClick={submit} className="btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignIn;
