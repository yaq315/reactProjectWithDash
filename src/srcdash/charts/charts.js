import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Charts = () => {
  const students = [
    { name: "Ahmed", age: 5 },
    { name: "Sara", age: 6 },
    { name: "Omar", age: 7 },
    { name: "Laila", age: 6 },
    { name: "Ali", age: 8 },
    { name: "Noor", age: 5 },
    { name: "Maha", age: 9 },
    { name: "Khaled", age: 7 },
    { name: "Yara", age: 10 },
    { name: "Amir", age: 6 },
    { name: "Layla", age: 8 },
    { name: "Faisal", age: 9 },
    { name: "Hassan", age: 7 },
    { name: "Reem", age: 6 },
    { name: "Zain", age: 10 },
    { name: "Jana", age: 5 },
    { name: "Tariq", age: 8 },
    { name: "Mariam", age: 9 },
    { name: "Salim", age: 7 },
    { name: "Dina", age: 6 }
  ];

  // حساب عدد الطلاب في كل فئة عمرية
  const ageGroups = [5, 6, 7, 8, 9, 10];
  const ageCounts = ageGroups.map(age => students.filter(student => student.age === age).length);

  const ageData = {
    labels: ageGroups, // الفئات العمرية
    datasets: [
      {
        label: 'Number of Students',
        data: ageCounts, // عدد الطلاب في كل فئة عمرية
        backgroundColor: '#5d4037', // لون الأعمدة
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Number of Students in Each Age Group'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age Groups' // توضيح للمحور X
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students' // توضيح للمحور Y
        },
        beginAtZero: true // ضمان أن يبدأ المحور Y من صفر
      }
    }
  };

  return (
    <div className="insight-item">
      <h3>Number of Students in Each Age Group</h3>
      <Bar data={ageData} options={options} />
    </div>
  );
};

export default Charts;
