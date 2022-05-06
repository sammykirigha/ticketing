import axios from "axios"

const LandingPage = () => {
	
	return <h1>Landing Page</h1>
}

// LandingPage.getInitialProps = async () => {
// 	if (typeof window === 'undefined') {
// 		const {data} = await axios.get('/api/users/currentuser')
// 	} else {
		
// 	const {data} = await axios.get('/api/users/currentuser')
// 	return data
// 	}
//   return {}
// }

// export async function getServersideProps() {
// 	const res = await axios.get('/api/users/currentuser')
// 	const data = await res.json();

// 	return {props: {data}}
// }

export default LandingPage;