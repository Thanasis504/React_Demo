import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Checkbox from "./Checkbox";

const RegisterForm = () => {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { team_name: teamName, password };

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message === "Team registered successfully") {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        setError(data.error || "Registration failed.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Team name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Checkbox id="solemnly-swear" label="I solemnly swear that I am up to no good." />
      <button type="submit" className="btn btn-outline-danger btn-shadow w-100">
        Register
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};

export default RegisterForm;
