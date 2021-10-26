import React from 'react'
import { Line } from 'react-chartjs-2'
import { Container } from './styles'

function Graphics () {

  // sells = random(0, 25)

  return (
    <Container>
      <Line 
        data={{
          // labels: [...Array(12).keys()],
          labels: [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
          datasets: [
            {
              lineTension: 0.5, 
              data: [...Array(12)].map(e=>~~(Math.random()*(180-110+30)+110)),
              // data: [...Array(365).keys()],
              borderColor: 'rgba(7,159,255,1)',
              borderWidth: 2,
            },
            {
              lineTension: 0.5, 
              data: [...Array(12)].map(e=>~~(Math.random()*(190-110+30)+110)),
              backgroundColor: 'rgba(224, 235, 250, 0.5)',
              borderColor: 'rgba(26,244,180,1)',
              borderWidth: 2,
              fill: true,
            }
          ]
        }}
        height={300}
        width={100}
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