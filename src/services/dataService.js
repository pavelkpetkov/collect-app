
export const getAll = async () => {
    const response = await fetch('http://localhost:3030/data');

    let collections = await response.json();
    return collections;
}

export const create = async (data, token) => {
    const response = await fetch('http://localhost:3030/data/create', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'x-authorization': token,
        },
        body: JSON.stringify(data)
    })
    let result = await response.json();
    return result;
}