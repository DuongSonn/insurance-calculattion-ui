import axios from "axios";
import { constance } from "configs";

const getProduct = async (data) => {
    try {
        const response = await axios.get(`${constance.API_URL}/getProduct`, {
            params: {
                genderCd: data.genderCd,
                dob: data.dob,
                planCode: data.planCode,
                premiumPerYear: data.premiumPerYear,
                paymentFrequency: data.paymentFrequency,
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export default { getProduct }