import { Navigator, Navigator2 } from '../common/Navigator'

export function Header({ office, setOffice}) {
  const formattedDate = office.date.toLocaleDateString('en-GB', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
})

  return (
    <div className="Footer">
      <h1>
        { office.name } 
      </h1>
      <h2>
        { formattedDate }
      </h2>
        <Navigator2 
            office={office}
            setOffice={setOffice}
        >
        </Navigator2>
    </div>
  )
}
