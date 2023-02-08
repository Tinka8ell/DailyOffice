import { Template } from '../common/Template'

export function Body({ office}) {
  console.log('Body.office: ', { ...office })
  const officeName = office.name.replace(/\s/g, '')
  return (
    <Template name={officeName} office={office} />
  )
}

