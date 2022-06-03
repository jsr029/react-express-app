import React from 'react'
import { useFetch } from '../components/utils/Hooks'
import UsePerformanceData from '../components/UserPerformanceData'

function GetUserPerformance() {
    const url = window.location.href
    const id = url.split('=')[1]
    const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}/performance`
    )
    	if (error) {
		return <span>Il y a un problème</span>
	}

	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
			<UsePerformanceData perfData={data.data} performance={data}/>
		</React.Fragment>
	)
};

export default GetUserPerformance