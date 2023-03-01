import type { office } from '../../hooks/useOffice'
import { Template } from '../template/Template'
import './body.css'

export function Body({ office }: { office: office }) {
  const officeName = office.name.replace(/\s/g, '')
  return (
    <Template newTemplate={ { name: officeName } } office={office} />
  )
}

