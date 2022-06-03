import React from 'react'
import { useFetch } from '../components/utils/Hooks'
import UserMainData from '../components/UserMainData'
import { NavLink } from 'react-router-dom'

function GetUserMainData() {
    const url = window.location.href
    const id = url.split('=')[1]
    const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}`
    )
    	if (error) {
		return <span>Il y a un problème</span>
	}

	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
		<ul className='navBar'>
			<li>
				<NavLink to='/'>
					<img src='http://127.0.0.1:3000/sportSeeLogo1.png' alt='Logo SportSee' />
				</NavLink> 
				<span className='soprtSee-header-title'> SportSee
				</span>
			</li>
			<li><NavLink to="#">Accueil</NavLink></li>
			<li><NavLink to="#">Profil</NavLink></li>
			<li><NavLink to="#">Réglage</NavLink></li>
			<li><NavLink to="#">Communauté</NavLink></li>
		</ul>
		<div className='menu-graph-bloc'>
			<ul className='vertical-nav'>
				<li><NavLink to="#"><img src='http://127.0.0.1:3000/img/yoga1.png' alt='' /></NavLink></li>
				<li><NavLink to="#"><img src='http://127.0.0.1:3000/img/swim1.png' alt='' /></NavLink></li>
				<li><NavLink to="#"><img src='http://127.0.0.1:3000/img/cycle1.png' alt='' /></NavLink></li>
				<li><NavLink to="#"><img src='http://127.0.0.1:3000/img/muscle1.png' alt='' /></NavLink></li>
			</ul>
			<UserMainData dataUser={data.data} />
		</div>
		</React.Fragment>
	)
};

export default GetUserMainData