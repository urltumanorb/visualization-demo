// App.js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const ECharts = () => {
  const barOptions = {
    title: {
      text: 'ECharts Bar Chart',
      left: 'center',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10],
      },
    ],
  };

  const pieOptions = {
    title: {
      text: 'ECharts Pie Chart',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Sales',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 5, name: 'Item A' },
          { value: 20, name: 'Item B' },
          { value: 36, name: 'Item C' },
          { value: 10, name: 'Item D' },
          { value: 10, name: 'Item E' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2>ECharts</h2>
      <ReactECharts option={barOptions} />
      <hr />
      <ReactECharts option={pieOptions} />
    </div>
  );
};

export default ECharts;
