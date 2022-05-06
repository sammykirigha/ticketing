import axios from "axios";
import { useState } from "react";

export default ({ url, method, body }) => {
    const [errors, setErrors, onSuccess] = useState(null);

    const doRequest = async () => {
        try {
            setErrors(null);
			const response = await axios[method](url, body);
			
			// if (onSuccess) {
			// 	onSuccess(response.data)
			// }
            return response.data;
        } catch (err) {
            setErrors(err.response.data.errors)
            throw err;
        }
    };

    return { doRequest, errors };
};
