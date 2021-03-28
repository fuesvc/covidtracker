import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { StyledGraph } from './caselinegraph-style';
import { StyledTitle } from './header-style';
import numeral from 'numeral';

const graphOptions = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,  
  scales: {
    xAxes: [
      {
        gridLines: {
          display: true,
        },
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
          // Include a dollar sign in the ticks
          beginAtZero: true,
          callback: function (value: any, index: any, values: any) {
            return numeral(value).format("0.0a");
          },
        },
      },
    ],
  },
}

const buildChartData = (data: any, casesType: any) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
}

const CaseLineGraph = (props: any) => {
  const { country, casesType } = props;
  const [data, setData] = useState([
    {
      x: '',
      y: 0
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=90")
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          setData(buildChartData(data, casesType));
        });
    };
    fetchData();
  }, [casesType]);
  return (
    <StyledGraph>
      <StyledTitle variant="h6">[{country === 'Worldwide'? 'W': country}] New {casesType}</StyledTitle>
      {data!.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(32, 31, 36, 0.5)",
                borderColor: "#FF0000",
                data: data,
              },
            ],
          }}
          options={graphOptions}
        />
      )}
    </StyledGraph>
  );
}

export default CaseLineGraph;