import { useState } from "react";

function ActivityForm({ addActivity }) {

  const [formData, setFormData] = useState({
    name: "",
    activity: "",
    hours: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.activity ||
      !formData.hours
    ) {
      alert("Fill all fields");
      return;
    }

    addActivity(formData);

    setFormData({
      name: "",
      activity: "",
      hours: ""
    });
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="activity"
        placeholder="Activity"
        value={formData.activity}
        onChange={handleChange}
      />

      <input
        type="number"
        name="hours"
        placeholder="Hours"
        value={formData.hours}
        onChange={handleChange}
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
}

export default ActivityForm;