import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

// Utils
import { store } from 'core';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart',
    },
  },
};

const labels = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const DaysChart = () => {
  const [{ activeKey = '', tabs }] = store.useModel('main');

  const currentTab = tabs?.[activeKey] || [];

  console.log('currentTab', currentTab);

  const days = useMemo(() => {
    const output = [];

    const { subTabs = [] } = currentTab;

    subTabs.forEach((subTab = {}) => {
      const { days = [], periods = [] } = subTab;

      const allEmployees = periods.reduce((pre = 0, current) => {
        const v = current?.employees || 0;
        return pre > v ? pre : v;
      }, 0);

      console.log('all employees', allEmployees);
      console.log('subTab', subTab);

      days.forEach(d => (output[d] = allEmployees));
    });

    return output;
  }, [currentTab]);

  console.log(days);

  const data = {
    labels,
    datasets: [
      {
        label: 'Employees',
        data: days,
        backgroundColor: 'rgb(0,0,0)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
