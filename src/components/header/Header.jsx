import { Footer } from '../footer/Footer'

export function Header({ office, setOffice}) {

  return (
    <div className="Header">
        <Footer 
            office={office}
            setOffice={setOffice}
        >
        </Footer>
    </div>
  )
}
