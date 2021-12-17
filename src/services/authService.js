export const register = async (username, email, password) => {
    console.log(username, email, password);

    //Todo:
    const result = await fetch('http://localhost:3030/auth/register', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ username, email, password })
    });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('authToken', result.accessToken);

    return result;
}

export const login = async (username, password) => {
    let result = await fetch('http://localhost:3030/auth/login', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    console.log(result);

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('authToken', result.accessToken);

    return result;
}

export const logout = () => {
    return fetch('http://localhost:3030/auth/logout');
}