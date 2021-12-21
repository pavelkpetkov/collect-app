
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

export const getOne = (id) => {
    return fetch(`http://localhost:3030/data/details/${id}`)
        .then(res => res.json())
};

export const update = (id, data, token) => {
    return fetch(`http://localhost:3030/data/edit/${id}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'x-authorization': token
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

export const remove = (id, token) => {
    return fetch(`http://localhost:3030/data/${id}`, {
        method: 'DELETE',
        headers: {
            'x-authorization': token
        }
    });
}