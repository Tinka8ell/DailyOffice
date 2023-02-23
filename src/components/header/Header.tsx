import type { office } from '../../hooks/useOffice'
import { Navigator } from '../common/Navigator'

export function Header({ office, updateOffice}: { office: office; updateOffice: (office: office) => void }) {
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
        <Navigator 
            office={office}
            updateOffice={updateOffice}
        />
    </div>
  )
}
