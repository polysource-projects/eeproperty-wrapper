const dotenv = require('dotenv');
dotenv.config();

const lib = require('./dist/index.js');

const { login, fetchMachines } = lib;

(async () => {
    const authenticationToken = await login(process.env.CODE_IMMEUBLE, process.env.CODE_PERSO);

    const machines = await fetchMachines(authenticationToken);

    console.log(machines);
})();

/*
[
    {
        costPerCycle: 290,
        number: 3,
        pricing: "INCLUSIVE",
        room: "XXXX",
        state: "DEACTIVATED",
        type: "WASHER"
    },
    ...
]
*/
