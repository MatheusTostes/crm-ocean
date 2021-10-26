import React from 'react'
import { Line } from 'react-chartjs-2'
import { Container } from './styles'

function Graphics (props) {
  return (
    <Container>
      <Line 
        data={{
          labels: props.interval,
          datasets: [
            {
              lineTension: 0.5, 
              data: props.data1,
              borderColor: 'rgba(7,159,255,1)',
              borderWidth: 2,
            },
            {
              lineTension: 0.5, 
              data: props.data2,
              backgroundColor: 'rgba(224, 235, 250, 0.5)',
              borderColor: 'rgba(26,244,180,1)',
              borderWidth: 2,
              fill: true,
            }
          ]
        }}
        options={{
          plugins: {
            legend: {
              onClick: null,
              display: false,
            }  
          },
          interaction: {
            mode: 'x'
          },
          elements: {
            point:{
                radius: 0.1,
            }
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 300,
              ticks: {
                color: "rgba(0, 0, 0, 0.3)",
              },
              grid: {
                borderDash: [6, 6],
                color: "rgba(0, 0, 0, 0.1)"
              }
            },
            x: {
              ticks: {
                color: "rgba(0, 0, 0, 0.3)",
              },
              grid: {
                borderDash: [0, 0],
                color: "rgba(0, 0, 0, 0)"
              }
            }
          }
        }}
      />
    </Container>
  )
}

export default Graphics;