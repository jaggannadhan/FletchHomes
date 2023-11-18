import { prop_det, prop_list } from "../Helper/mockApis";

const apiKeys = [
    "8f1c69b868msh6f72598076b90e4p130b78jsn8cef97f6a890",
    "b5d50eadecmshae6f3750c658061p1f6953jsnbf3a1e1a21b1",
    "c23f1f5040msh2d9f888e2376ee5p16c500jsnf0fa9092ba10"
]

export const getPropertyList = async (location) => {
    const url = 'https://realty-in-us.p.rapidapi.com/properties/v3/list';
    const options = {
        method: 'POST',
        mode: "cors",
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKeys[0],
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        },
        body: JSON.stringify({
            limit: 200,
            offset: 0,
            city: location?.city,
            state_code: location?.state_code,
            // postal_code: '90004',
            status: [
                'for_sale',
                'ready_to_build'
            ],
            sort: {
                direction: 'desc',
                field: 'list_date'
            }
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        if(['You are not subscribed to this API.', 'Too many requests'].includes(result?.message))
            return prop_list;

        return result;
    } catch (error) {
        console.error(error);
        return prop_list;
    }
}

export const getPropertyDetails = async (property_id) => {
    const url = `https://realty-in-us.p.rapidapi.com/properties/v3/detail?property_id=${property_id}`;
    const options = {
        method: 'GET',
        mode: "cors",
        headers: {
            'X-RapidAPI-Key': apiKeys[0],
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("getPropDetRes: ", result);

        if(['You are not subscribed to this API.', 'Too many requests'].includes(result?.message))
            return prop_det;

        return result;
    } catch (error) {
        console.error(error);
        return prop_det;
    }
}

export const calculateMortgage = async (home_ins, tax_rate, dwn_pymt, loan_amt, term, rate, hoa, benefits=false) => {
    const params = `home_insurance=${home_ins}&property_tax_rate=${tax_rate}&down_payment=${dwn_pymt}&price=${loan_amt}&term=${term}&rate=${rate}&hoa_fees=${hoa}&apply_veterans_benefits=${benefits}`;
    const url = `https://realty-in-us.p.rapidapi.com/mortgage/v2/calculate?${params}`;

    const options = {
        method: 'GET',
        mode: "cors",
        headers: {
            'X-RapidAPI-Key': apiKeys[0],
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const getSimilarHomes = async (property_id) => {
    const url = `https://realty-in-us.p.rapidapi.com/properties/v3/list-similar-homes?property_id=${property_id}`;

    const options = {
        method: 'GET',
        mode: "cors",
        headers: {
            'X-RapidAPI-Key': apiKeys[0],
            'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}


export const calculateCashFlow = async (property_id) => {
    const url = `http://18.205.25.241/calculator/?property_id=${property_id}`;

    const options = {
        method: 'GET',
        mode: "no-cors"
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}