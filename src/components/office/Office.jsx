import { useState } from 'react'
import { Header } from '../header/Header'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
    name: 'Missing',
}

export function Office() {
    const [office, setOffice] = useState(defaultOffice)

    const getOfficeString = '"' + officeStrings[office.office] + '"'
    
    if (office.office >= changeOvers.length){ // not been set
        // todo: first check if we were passed a date / office
        const hours = office.date.getHours()
        let newOffice = changeOvers.length
        let newDate = office.date
        changeOvers.forEach((value, index) => {
            if (hours >= value){
                newOffice = index
            }
        });
        if (newOffice < 0){
            newOffice += changeOvers.length
            newDate.setDate(newDate.getDate -1)
        }
        setOffice({ 
            date: newDate, 
            office: newOffice, 
            name: officeStrings[newOffice],
        })
    }

  return (
    <div className="Office">
        <Header 
            office={office}
            setOffice={setOffice}
        >

        </Header>
        <Body >

        </Body>
        <Footer 
            office={office}
            setOffice={setOffice}
        >
        </Footer>
    </div>
  )
}
