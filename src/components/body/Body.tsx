import type { office } from '../../hooks/useOffice'
import { OfficeTemplate } from '../template/Template'
import './body.css'

export function Body({ office }: { office: office }) {
  const officeName = office.name.replace(/\s/g, '')
  return (
    <OfficeTemplate newTemplate={ { name: officeName } } office={office} />
  )
}

