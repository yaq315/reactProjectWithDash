import React from 'react';
import './Insights.css';


const insightsData = [
  {
    title: 'Teachers',
    count: 4,
    maxValue: 4, 
  },
  {
    title: 'Students',
    count: 20,
    maxValue: 20 
  },
  {
    title: 'Gender of students',
    count: 'Girls: 10, Boys: 10',
    maxValue: 20 
  }
];

function Insights() {
  return (
    <div className="insights">
      {insightsData.map((item, index) => {
        const progress = (item.count / item.maxValue) * 100; 
        return (
          <div className="insight-item" key={index}>
            <h3>{item.title}</h3>
            <h1>{item.count}</h1>
            <div className="progress-bar">
              <span style={{ width: `${progress}%` }}></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Insights;
