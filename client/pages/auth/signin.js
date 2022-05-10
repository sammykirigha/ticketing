import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import Link from "next/link";

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
        <div className="grid grid-cols-2">
            <div className="bg-gradient-to-r from-indigo-500 to-sky-500  flex justify-center h-full py-8 px-8">
                <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
                    <form onSubmit={onSubmit}>
                        <h3 className="text-gray-900 pb-3">Sign In</h3>
                        <div className="form-group mb-6">
                            <label className="form-label inline-block mb-2 text-gray-700">
                                Email Address
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                className="form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5 
                                text-base 
                                font-normal 
                                text-gray-700 
                                bg-white 
                                bg-clip-padding 
                                border 
                                border-solid 
                                border-gray-300 
                                rounded transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="inputBox"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email Address"
                            />
                        </div>
                        {errors?.length > 0 &&
                            errors?.map((err, index) =>
                                err.field === "email" ? (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                        <span className="my-0" key={index}>
                                            {err.message}
                                        </span>
                                    </div>
                                ) : null
                            )}
                        <div className=" form-group mb-6">
                            <label className="form-label inline-block mb-2 text-gray-700">
                                Password
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control 
                                block 
                                w-full 
                                px-3 
                                py-1.5 
                                text-base 
                                font-normal 
                                text-gray-700 
                                bg-white 
                                bg-clip-padding 
                                border 
                                border-solid 
                                border-gray-300 
                                rounded transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="passwordInput"
                                aria-describedby="passHelp"
                                placeholder="Enter Your Password "
                            />
                        </div>
                        {errors?.length > 0 &&
                            errors?.map((err, index) =>
                                err.field === "password" ? (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                        <span className="mb-3" key={index}>
                                            {err.message}
                                        </span>
                                    </div>
                                ) : null
                            )}
                        {errors?.length > 0 &&
                            errors?.map((err, index) => (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                    <span className="mb-2" key={index}>
                                        {err.message}
                                    </span>
                                </div>
                            ))}
                        <div className="flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                                <input
                                    type="checkbox" value="" id="flexCheckDefault"
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                />
                                <label className="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <Link href="#">
                                <a className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
                                    Forgot Password?
                                </a>
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="
                            w-full
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                        "
                        >
                            Sign In
                        </button>
                        <p class="text-gray-800 mt-6 text-center">
                            Don't have account?{" "}
                            <Link href="#!">
                                <a class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
                                    Register
                                </a>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <div className="bg-[url('../../assets/background2.jpeg')] h-full">image</div>
        </div>
    );
};
