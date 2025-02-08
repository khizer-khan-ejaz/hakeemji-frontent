import axios from 'axios';
import React from 'react'
import AppointmentsContainer from './AppointmentsContainer';

const FetchAppointmentsSSR = async() => {

	const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
	let appointments = [];
	const res = await axios({
		url : `${backendUrl}/contact`,
		method : "get"
	})
	appointments = res.data?.data

	return <AppointmentsContainer appointments={appointments} />

}

export default FetchAppointmentsSSR
