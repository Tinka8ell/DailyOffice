import { useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './Office.css'

// const hours2Milliseconds = 60 * 60 * 60 * 1000
const changeOvers = [
    4 , // 4 am
    11, // 11 am
    17, // 5 pm
    20, // 8 pm
]
const officeStrings = [
    'Morning Prayers',
    'Midday Prayers', 
    'Evening Prayers',
    'Compline',
]
const startHour = changeOvers[0];
const defaultOffice = {
    date: new Date(),
    office: changeOvers.length,
}

export function Office() {
    const [office, setOffice] = useState(defaultOffice)

    const getOfficeString = '"' + officeStrings[office.office] + '"'
    
    if (office.office >= changeOvers.length){ // not been set
        // todo: first check if we were passed a date / office
        const hours = office.date.hours
        let newOffice = changeOvers.length
        let newDate = office.date
        changeOvers.forEach((value, index) => {
            if (hours < value - startHour){
                newOffice = index
            }
        });
        // now: 0 (yesterday), 1, 2, 3 or 4
        newOffice -= 1
        if (newOffice < 0){
            newOffice += changeOvers.length
            newDate.setDate(newDate.getDate -1)
        }
        setOffice({ date: newDate, office: newOffice })
    }

  return (
    <div className="Office">
        <DatePicker 
            selected={office.date} 
            onChange={(date) => setOffice({ ...office, date })}
        />
        { officeStrings[office.office] }
    </div>
  )
}
