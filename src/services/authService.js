export const register = (username, email, password) => {
    console.log(username, email, password);
    return fetch('http://localhost:3030/auth/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
        .then(res => res.json());
}

export const login = async (username, password) => {
    let res = await fetch('http://localhost:3030/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}