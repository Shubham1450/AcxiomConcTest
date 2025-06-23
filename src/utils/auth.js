// src/utils/auth.js
export const getSession = () => {
    const session = localStorage.getItem('sessionUser');
    return session ? JSON.parse(session) : null;
};

export const logout = () => {
    localStorage.removeItem('sessionUser');
};
