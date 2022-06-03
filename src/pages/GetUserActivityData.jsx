import React from 'react'
import { useFetch } from '../components/utils/Hooks'
import UserActivityData from '../components/UserActivityData'

function GetUserActivityData() {
    const url = window.location.href
    const id = url.split('=')[1]
    const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}/activity`
    )
    	if (error) {
		return <span>Il y a un problème</span>
	}

	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
			<UserActivityData data={data.data}/>
		</React.Fragment>
	)
};
export default GetUserActivityData