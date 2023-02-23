import { Template } from '../template/Template'
import type { office } from '../../hooks/useOffice'

export function Body({ office }: { office: office }) {
  const officeName = office.name.replace(/\s/g, '')
  return (
    <Template template={ { name: officeName } } office={office} />
  )
}

