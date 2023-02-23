import type { office } from '../../hooks/useOffice'
import { Navigator } from '../common/Navigator'

export function Footer({ office, updateOffice}: { office: office; updateOffice: (office: office) => void }) {

  return (
    <div className="Footer">
      <Navigator 
        office={office}
        updateOffice={updateOffice}
      />
    </div>
  )
}
