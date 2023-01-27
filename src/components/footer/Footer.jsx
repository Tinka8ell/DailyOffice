import { Navigator } from '../common/Navigator'

export function Footer({ office, setOffice}) {

  return (
    <div className="Footer">
        <Navigator 
            office={office}
            setOffice={setOffice}
        >
        </Navigator>
    </div>
  )
}
