import { Navigator } from '../common/Navigator'

export function Footer({ office, updateOffice}) {

  return (
    <div className="Footer">
      <Navigator 
        office={office}
        updateOffice={updateOffice}
      />
    </div>
  )
}
