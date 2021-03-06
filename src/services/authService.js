export const register = async (username, email, password) => {

    const result = await fetch('http://localhost:3030/auth/register', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ username, email, password })
    })
        .then(res => res.json());

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('authToken', result.accessToken);

    return result;
}

export const login = async (username, password) => {
    const result = await fetch('http://localhost:3030/auth/login', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json());

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('authToken', result.accessToken);

    return result;
}

export const logout = (token) => {
    
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('userId');
  
    return fetch('http://localhost:3030/auth/logout', {
        headers: {
            'x-authorization': token,
        }
    });
}

export const getOwner = (id) => {
    return fetch(`http://localhost:3030/auth/profile/${id}`)
        .then(res => res.json())
};