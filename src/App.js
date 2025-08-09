import React, { useState } from "react";

function Navbar({ setActiveForm }) {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #ffb6c1, #ffc0cb)",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>My Website</h2>
      <div>
        <button
          onClick={() => setActiveForm("register")}
          style={navButtonStyle}
        >
          Register
        </button>
        <button onClick={() => setActiveForm("login")} style={navButtonStyle}>
          Login
        </button>
      </div>
    </nav>
  );
}

const navButtonStyle = {
  margin: "0 5px",
  padding: "0.5rem 1rem",
  background: "white",
  border: "1px solid #ccc",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

function Card({ children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "2rem",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        border: "2px solid #ffb6c1", // outline
        width: "350px",
      }}
    >
      {children}
    </div>
  );
}

function RegisterForm() {
  return (
    <Card>
      <h3>Register</h3>
      <form>
        <input type="text" placeholder="Full Name" style={inputStyle} />
        <input type="text" placeholder="Username" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="tel" placeholder="Phone Number" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <input
          type="password"
          placeholder="Confirm Password"
          style={inputStyle}
        />
        <input type="date" placeholder="Date of Birth" style={inputStyle} />
        <select style={inputStyle}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" style={formButtonStyle}>
          Register
        </button>
      </form>
    </Card>
  );
}

function LoginForm() {
  return (
    <Card>
      <h3>Login</h3>
      <form>
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <button type="submit" style={formButtonStyle}>
          Login
        </button>
      </form>
    </Card>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "0.5rem 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const formButtonStyle = {
  width: "100%",
  padding: "0.7rem",
  marginTop: "0.5rem",
  background: "linear-gradient(90deg, #ffb6c1, #ffc0cb)",
  border: "none",
  borderRadius: "6px",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};

export default function App() {
  const [activeForm, setActiveForm] = useState("register");

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffe4e1, #fff0f5)",
      }}
    >
      <Navbar setActiveForm={setActiveForm} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 70px)",
        }}
      >
        {activeForm === "register" ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
}

