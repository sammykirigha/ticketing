import { useState } from "react";
import axios from "axios"
import Router from 'next/router'
// import useRequest from "../../hooks/use-request";

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
    // const { doRequest, errors } = useRequest({
    //     url: "/api/users/signup",
    //     method: "method",
	// 	body: { email, password },
	// 	onSuccess: () => Router.push('/')
    // });

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
             const response = await axios.post('/api/users/signup', {
            email, password
             });
            return response.data
        } catch (err) {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        }

		// await doRequest();
		
    };

    return (
        <form onSubmit={onSubmit}>
            <h3>Signup here</h3>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            {errors.length > 0 && errors.map(err => err.field === 'email' ? <div className="alert alert-danger">
                <ul className="my-0">
                    <li key={err.message}>{err.message}</li>
                </ul>
            </div>: null)}
            <div className="form-group">
                <label>Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                />
            </div>
            {errors.length > 0 && errors.map(err => err.field === 'password' ? <div className="alert alert-danger">
                <ul className="my-0">
                    <li key={err.message}>{err.message}</li>
                </ul>
            </div>: null)}
            {/* <div className="alert alert-danger">
                <h6>Oooops....</h6>
                <ul className="my-0">
                    {errors.map(err => <li key={err.message}>{err.message}</li> )}
                </ul>
            </div> */}
            
            <button type="submit" className="btn btn-primary">
                Sign Up
            </button>
        </form>
    );
};
