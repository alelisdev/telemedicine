import Router from 'next/router'
import { BehaviorSubject } from 'rxjs';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('jwtToken')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    register,
    logout
};

function login(payload) {
    return axios.post(`${baseUrl}/api/auth/login`, payload)
        .then(res => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            const { token } = res.data;
            userSubject.next(token);
            localStorage.setItem('jwtToken', JSON.stringify(token));
            setAuthToken(token);
            return token;
        })
}

function register(payload) {
    return axios.post(`${baseUrl}/api/auth/register`, payload)
        .then(res => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            const { token } = res.data;
            userSubject.next(token);
            localStorage.setItem('jwtToken', JSON.stringify(token));
            setAuthToken(token);
            return token;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('jwtToken');
    setAuthToken(null);
    userSubject.next(null);
    Router.push('/sign-in');
}