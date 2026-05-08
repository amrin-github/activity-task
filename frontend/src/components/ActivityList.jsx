function ActivityList({
  activities,
  deleteActivity
}) {

  return (

    <div>

      <h2>Activities</h2>

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Activity</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {activities.map((item) => (

            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.activity}</td>

              <td>{item.hours}</td>

              <td>

                <button
                  onClick={() =>
                    deleteActivity(item.id)
                  }
                  className="delete-btn"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ActivityList;