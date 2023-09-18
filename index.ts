const LOGIN_URL = 'https://login.eeproperty.com/api/v3/mobile/user/login';
const MACHINES_URL = 'https://vesta.eeproperty.com/api/v3/mobile/machines';

interface MachineData {
    costPerCycle: number;
    number: number;
    pricing: 'INCLUSIVE' | string;
    room: string;
    state: 'ERROR' | 'ACTIVATED' | 'DEACTIVATED' | string;
    type: 'WASHER' | string;
}

export const login = async (codeImmeuble: string, codePersonnel: string) => {

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
    } else {
        throw new Error(data.message);
    }

}

export const fetchMachines = async (token: string) => {
    
    const res = await fetch(MACHINES_URL, {
        headers: {
            'x-token': token,
            'x-app-version': '1.6.6',
        }
    });

    const data = await res.json();

    if (Array.isArray(data.machines)) {
        return data.machines as MachineData[];
    } else {
        throw new Error(data.message);
    }

}
