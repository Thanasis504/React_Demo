// ScoreTable.jsx
import React from 'react';

const ScoreTable = ({ scores }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-10">
        <table className="table table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Team Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.team_name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;
