"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMachines = exports.login = void 0;
const LOGIN_URL = 'https://login.eeproperty.com/api/v3/mobile/user/login';
const MACHINES_URL = 'https://vesta.eeproperty.com/api/v3/mobile/machines';
const login = async (codeImmeuble, codePersonnel) => {
    const res = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            code: codeImmeuble,
            pin: codePersonnel,
        })
    });
    const data = await res.json();
    console.log(data);
    if (data.message === 'OK') {
        return data.token;
    }
    else {
        throw new Error(data.message);
    }
};
exports.login = login;
const fetchMachines = async (token) => {
    const res = await fetch(MACHINES_URL, {
        headers: {
            'x-token': token,
            'x-app-version': '1.6.6',
        }
    });
    const data = await res.json();
    if (Array.isArray(data.machines)) {
        return data.machines;
    }
    else {
        throw new Error(data.message);
    }
};
exports.fetchMachines = fetchMachines;
