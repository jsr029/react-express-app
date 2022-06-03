import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2'
ChartJS.register(...registerables);

function UserDataItem({ userId, sessions }){
    let sessionsDay = []
    let sessionsKg = []
    let sessionsCal = []    

    for(let i=0; i < sessions.length; i++){
        sessionsDay.push(sessions[i].day)
        sessionsKg.push(sessions[i].kilogram)
        sessionsCal.push(sessions[i].calories)
    }
    const data = {
        labels: sessionsDay,
    datasets:[
            {
                label : "Kilogram",
                data: sessionsKg,
                backgroundColor:['black']
            },
            {
                label : "Calories",
                data: sessionsCal,
                backgroundColor:['#FF0101']
            }

        ]
    }
    const options = {
        maintainRespectRatio:false
    }
    return (
        <>
            <div className='sportSee-activity-item'>
                <Bar data={data} options={options} />
            </div>
         </>    
    )
}

export default UserDataItem