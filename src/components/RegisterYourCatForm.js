import { useState } from "react";

const COLORS = ["white", "red", "blue", "black", "cream"];

export default function RegisterYourCatForm() {
  const [values, setValues] = useState({
    name: "",
    color: "",
    age: "",
    habits: "",
  });
  const saveFormData = async () => {
    const response = await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      await saveFormData();
      alert("Your registration was successfully submitted!");
      setValues({
        name: "",
        color: "",
        age: "",
        habits: "",
      });
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register Your Cat</h2>

      <label>Name*:</label>
      <input type="text" required value={values.name} onChange={set("name")} />

      <label>Color*:</label>
      <select requiredvalue={values.color} onChange={set("color")}>
        <option value="">Select color</option>
        {COLORS.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <label>Age*:</label>
      <input
        type="number"
        required
        min="1"
        value={values.age}
        onChange={set("age")}
      />

      <label>Habits:</label>
      <textarea value={values.habits} onChange={set("habits")} />

      <button type="submit">Submit</button>
    </form>
  );
}
