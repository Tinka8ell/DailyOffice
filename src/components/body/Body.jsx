import { Template } from '../common/NewTemplate'

export function Body({ office}) {
  const officeName = office.name.replace(/\s/g, '')
  return (
    <Template template={ { name: officeName } } office={office} />
  )
}

