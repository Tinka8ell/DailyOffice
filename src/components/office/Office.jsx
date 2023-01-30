import { useOffice } from '../../hooks/useOffice'
import { Header } from '../header/Header'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export function Office() {
    const [office, updateOffice] = useOffice()

    return (
        <div className="Office">
            <Header 
                office={office}
                updateOffice={updateOffice}
            >

            </Header>
            <Body 
                office={office}
                updateOffice={updateOffice}
            />
            <Footer 
                office={office}
                updateOffice={updateOffice}
            >
            </Footer>
        </div>
    )
}
