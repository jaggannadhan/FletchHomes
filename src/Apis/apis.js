import { prop_det, prop_list, similar_list, calculator } from "../Helper/mockApis";

const apiKeys = [
    "862f6090ffmshb31aa1281374aaap118f5fjsn52c23f15dd50",
    "8f1c69b868msh6f72598076b90e4p130b78jsn8cef97f6a890",
    "b5d50eadecmshae6f3750c658061p1f6953jsnbf3a1e1a21b1",
    "c23f1f5040msh2d9f888e2376ee5p16c500jsnf0fa9092ba10"
]

const backEnd = "http://18.205.25.241";

export const getPropertyList = async (location) => {
    const { city, state_code, postal_code } = location;
    let params = "";
    if(postal_code) params = params + `postalCode=${postal_code}`;
    if(city) params = params + `city=${city}&stateCode=${state_code}`;

    params = decodeURI(params);
    const url = `${backEnd}/property/list?${params}`;
    const options = {
        method: 'GET',
        mode: "cors",
    };
    console.log(url);
    return prop_list;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if(['You are not subscribed to this API.', 'Too many requests'].includes(result?.message) || result?.success == false)
            return prop_list;

        return result;
    } catch (error) {
        console.error(error);
        return prop_list;
    }
}

export const getPropertyDetails = async (property_id) => {
    // return prop_det;
    const url = `${backEnd}/property/details?property_id=${property_id}`;
    const options = {
        method: 'GET',
        mode: "cors"
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("getPropDetRes: ", result);

        if(['You are not subscribed to this API.', 'Too many requests'].includes(result?.message) || result?.success == false)
            return prop_det;

        return result;
    } catch (error) {
        console.error(error);
        return prop_det;
    }
}

export const calculateMortgage = async (property_id) => {
    const url = `${backEnd}/calculator?property_id=${property_id}`;
    const options = {
        method: 'GET',
        mode: "cors"
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if(!(result?.success)) 
            return calculator;

        return result;
    } catch (error) {
        console.error(error);
        return calculator;
    }
}


export const setCalculator = async(property_id, body) => {
    const url = `${backEnd}/calculator?property_id=${property_id}`;
    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            'content-type': 'application/json'
        },
        body: body
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export const getSimilarHomes = async (property_id) => {
    const url = `${backEnd}/property/similar?property_id=${property_id}`;

    const options = {
        method: 'GET',
        mode: "cors"
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if(['You are not subscribed to this API.', 'Too many requests'].includes(result?.message) || result?.success == false)
            return similar_list;

        return result;
    } catch (error) {
        console.error(error);
        return similar_list;
    }
}


export const getPhotos = async (property_id) => {
    const url = `${backEnd}/property/photos?property_id=${property_id}`;

    const options = {
        method: 'GET',
        mode: "cors"
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return {};
    }
}


export const signUp = async (data) => {
    const url = `${backEnd}/signup`;

    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            'content-type': 'application/json'
        },
        body: {
            userName: data.get("firstName") + " " + data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return {success: false};
    }
}

export const login = async (data) => {
    const url = `${backEnd}/login`;

    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            'content-type': 'application/json'
        },
        body: {
            email: data.get("email"),
            password: data.get("password")
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return {success: false};
    }
}
