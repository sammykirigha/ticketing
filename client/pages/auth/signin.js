import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { doRequest, errors } = useRequest({
        url: "/api/users/signin",
        method: "post",
        body: { email, password },
        // onSuccess: () => Router.push('/')
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
        Router.push("/");
    };

    return (
        <form onSubmit={onSubmit}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            {errors?.length > 0 &&
                errors?.map((err, index) =>
                    err.field === "email" ? (
                        <div className="alert alert-danger">
                            <span className="my-0" key={index}>
                                {err.message}
                            </span>
                        </div>
                    ) : null
                )}
            <div className="form-group">
                <label>Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                />
            </div>
            {errors?.length > 0 &&
                errors?.map((err, index) =>
                    err.field === "password" ? (
                        <div className="alert alert-danger">
                            <span className="my-0" key={index}>
                                {err.message}
                            </span>
                        </div>
                    ) : null
                )}
            {errors?.length > 0 &&
                errors?.map((err, index) => (
                    <div className="alert alert-danger">
                        <span className="my-0" key={index}>
                            {err.message}
                        </span>
                    </div>
                ))}
            <button type="submit" className="btn btn-primary">
                Sign In
            </button>
        </form>
    );
};
