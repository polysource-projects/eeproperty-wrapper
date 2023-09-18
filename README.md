# EEProperty API Wrapper

A TypeScript wrapper around EEProperty's Private API (used by the FMEL).

## Example

```typescript

import { login, fetchMachines } from 'eeproperty-api-wrapper';

const authenticationToken = await login('code immeuble', 'code personnel');

const machines = await fetchMachines(authenticationToken);

console.log(machines);

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

```
