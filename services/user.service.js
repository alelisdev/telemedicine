import { BehaviorSubject } from 'rxjs';
import Router from 'next/router'
import baseUrl from '../utils/baseUrl';
import { fetchWrapper } from '../helpers/fetch-wrapper';

const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')));

export const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    register,
    logout
};

function login(payload) {
    return fetchWrapper.post(`${baseUrl}/api/auth/login`, payload)
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function register(payload) {
    return fetchWrapper.post(`${baseUrl}/api/auth/register`, payload)
        .then(user => {
            // publish user to subscribers and store in local storage to stay logged in between page refreshes
            userSubject.next(user);
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/sign-in');
}
