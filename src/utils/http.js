import axios from "axios";

export const fetchAdvice = async() => {
    const response = await axios.get(import.meta.env.VITE_API_URL)
    return response.data;
}
