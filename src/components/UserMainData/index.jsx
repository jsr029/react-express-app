import React from 'react'
import GetUserPerformance from '../../pages/GetUserPerformance'
import GetUserActivityData from '../../pages/GetUserActivityData'
import GetUserSessionsData from '../../pages/GetUserSessionsData'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(...registerables);

function UserMainData({ dataUser }) {
    const USERMAINNAME = dataUser.userInfos.firstName
    const USERMAINCAL = dataUser.keyData.calorieCount
    const USERMAINPRO = dataUser.keyData.proteinCount
    const USERMAINCAR = dataUser.keyData.carbohydrateCount
    const USERMAINLIP = dataUser.keyData.lipidCount
    const USERMAINTDSCORE = -dataUser.score * 100
    console.log(USERMAINTDSCORE)
    const data = {
        labels: ['Score', ''],
        datasets:[
            {
                label : "% de votre objectif",
                data:[USERMAINTDSCORE, 100],
                backgroundColor:['#FF0101', 'white']
            }
        ]
    }

    return (
        <>
            <div className='sportSee-main'>
                <h2><span className='sportSee-main-hello'>Bonjour</span> <span className='sportSee-main-name'>{USERMAINNAME}</span></h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className='spotSee-main-bloc'>
                    <div className='sportSee-main-graph'>
                        <GetUserActivityData />
                        <div className='sportSee-main-grapBloc'>
                            <GetUserSessionsData />
                            <GetUserPerformance  />
                            <div className='sportSee-score'>
                                <Doughnut data={data} />
                            </div>
                        </div>
                    </div>
                    <div className='sportSee-main-right'>
                        <div className='sportSee-main-calories'>
                            <div className='sportSee-main-calImg'>
                                <img src='http://127.0.0.1:3000/img/calories.png' alt='Calories Icon' />
                            </div>
                            <div className='sportSee-main-calBloc'>
                                <div className='sportSee-main-calNum'>
                                    {USERMAINCAL / 1000}kCal
                                </div>
                                <div className='sportSee-main-calText'>
                                    Calories
                                </div>
                            </div>
                        </div>
                        <div className='sportSee-main-protein'>
                            <div className='sportSee-main-calImg'>
                                <img src='http://127.0.0.1:3000/img/protein.png' alt='Protein Icon' />
                            </div>
                            <div className='sportSee-main-calBloc'>
                                <div className='sportSee-main-calNum'>
                                    {USERMAINPRO}g
                                </div>
                                <div className='sportSee-main-calText'>
                                    Proteines
                                </div>
                            </div>
                        </div>
                        <div className='sportSee-main-carbohydrate'>
                            <div className='sportSee-main-calImg'>
                                <img src='http://127.0.0.1:3000/img/glucid.png' alt='Protein Icon' />
                            </div>
                            <div className='sportSee-main-calBloc'>
                                <div className='sportSee-main-calNum'>
                                    {USERMAINCAR}g
                                </div>
                                <div className='sportSee-main-calText'>
                                    Glucides
                                </div>
                            </div>
                        </div>
                        <div className='sportSee-main-lipid'>
                            <div className='sportSee-main-calImg'>
                                <img src='http://127.0.0.1:3000/img/lipid.png' alt='Protein Icon' />
                            </div>
                            <div className='sportSee-main-calBloc'>
                                <div className='sportSee-main-calNum'>
                                    {USERMAINLIP}g
                                </div>
                                <div className='sportSee-main-calText'>
                                    Lipides
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
};

export default UserMainData