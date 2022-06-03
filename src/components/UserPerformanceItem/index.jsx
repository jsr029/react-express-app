import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2'

ChartJS.register(...registerables);

function UserPerformanceItem({ userId, kind, perfData }){
    let perfValue = []
    let perfKind = []
    for(let i=0; i < perfData.length; i++){
        perfValue.push(perfData[i].value)
        perfKind.push(kind[perfData[i].kind])
    }
     const data = {
        labels: perfKind,
        datasets:[
            {
                label : "Performance",
                data: perfValue,
                backgroundColor:['#FF0101']
            }
        ]
    }
    const options = {
        maintainRespectRatio:false
    }
      return (
        <>
            <div className='sportSee-performance-item'>
                <Radar data={data} options={options}/>
            </div>
        </>    
    )
}

export default UserPerformanceItem