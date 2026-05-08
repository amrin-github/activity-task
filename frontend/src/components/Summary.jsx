function Summary({ summary }) {

  return (

    <div className="summary-box">

      <h2>Summary</h2>

      <p>
        Total Entries:
        {summary.total_entries}
      </p>

      <p>
        Total Hours:
        {summary.total_hours}
      </p>

      <p>
        Most Active User:
        {summary.most_active_user}
      </p>

    </div>
  );
}

export default Summary;