import { useOffice } from '../../hooks/useOffice'
import { Header } from '../header/Header'
import { Body } from '../body/Body'
import { Footer } from '../footer/Footer'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
const queryClient = new QueryClient()
 
export function Office() {
    const [office, updateOffice] = useOffice()

    return (
        <div className="Office">
            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>
        </div>
    )
}
