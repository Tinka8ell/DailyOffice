import { useOffice } from '../../hooks/useOffice'
import { Header } from '../header/Header'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'

export function Office() {
    const [office, updateOffice] = useOffice()

    return (
        <div className="Office">
            <Header 
                office={office}
                updateOffice={updateOffice}
            />
            <Body 
                office={office}
            />
            <Footer 
                office={office}
                updateOffice={updateOffice}
            />
        </div>
    )
}
