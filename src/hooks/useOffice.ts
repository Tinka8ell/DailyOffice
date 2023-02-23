import { useState, useEffect } from 'react'

// const hours2Milliseconds = 60 * 60 * 60 * 1000
const changeOvers = [
    4 , // 4 am
    11, // 11 am
    17, // 5 pm
    20, // 8 pm
]
const Compline = 'Compline'
const officeStrings = [
    'Morning Prayers',
    'Midday Prayers', 
    'Evening Prayers',
    Compline,
]
const defaultOffice = {
    date: new Date(),
    office: null,
    name: 'Missing',
}
export type office = {
    date: Date,
    office: null | number,
    name: string
}

function alignOffice(nextOffice: office){
    if (nextOffice.office == null){ // not been set
        // todo: first check if we were passed a date / office
        const hours = nextOffice.date.getHours()
        nextOffice.office = changeOvers.length
        changeOvers.forEach((value, index) => {
            if (hours >= value){
                nextOffice.office = index
            }
        });
    }
    if (nextOffice.office < 0){
        nextOffice.office += changeOvers.length
        nextOffice.date.setDate(nextOffice.date.getDate() - 1)
    }
    if (nextOffice.office >= changeOvers.length){ 
        nextOffice.office -= changeOvers.length
        nextOffice.date.setDate(nextOffice.date.getDate() + 1)
    }
    nextOffice.name = officeStrings[nextOffice.office]
    if (nextOffice.name === Compline){
        nextOffice.name = nextOffice.date.toLocaleDateString('en-GB', {
            weekday: 'long', 
        }) + ' ' + Compline
    }

    return nextOffice
}

export function useOffice():[office, (office: office) => void] {
    const [office, setOffice] = useState(alignOffice(defaultOffice))

    function updateOffice(nextOffice: office){
        setOffice(alignOffice(nextOffice)) 
    }

    return [office, updateOffice]
}

