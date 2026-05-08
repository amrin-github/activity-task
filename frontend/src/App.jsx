import { useEffect, useState } from "react";
import axios from "axios";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import Summary from "./components/Summary";
import "./App.css";

function App() {

  const [activities, setActivities] = useState([]);
  const [summary, setSummary] = useState({});

  const fetchActivities = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/activities/"
    );
    setActivities(response.data);
  };
  const fetchSummary = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/summary/"
    );
    setSummary(response.data);
  };
  const addActivity = async (data) => {
    await axios.post(
      "http://127.0.0.1:8000/activities/",
      data
    );
    fetchActivities();
    fetchSummary();
  };
  const deleteActivity = async (id) => {
  try {
    await axios.delete(
      `http://127.0.0.1:8000/activities/${id}/`
    );
    fetchActivities();
    fetchSummary();
  } catch(error) {
    console.log(error);
  }
};
  useEffect(() => {
    fetchActivities();
    fetchSummary();
  }, []);

  return (
    <div className="container">

      <h1>Student Activity Tracker</h1>

      <ActivityForm addActivity={addActivity} />

      <ActivityList activities={activities} deleteActivity={deleteActivity} />

      <Summary summary={summary} />


    </div>
  );
}

export default App;