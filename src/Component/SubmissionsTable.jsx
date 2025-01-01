import React from "react";

function SubmissionsTable({ submissions }) {
  return (
    <div className="submissions-table">
      {submissions.length > 0 && (
        <table border="1" className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Submission Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index}>
                <td>{submission.firstName}</td>
                <td>{submission.lastName}</td>
                <td>{submission.gender}</td>
                <td>{submission.email}</td>
                <td>{submission.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SubmissionsTable;
