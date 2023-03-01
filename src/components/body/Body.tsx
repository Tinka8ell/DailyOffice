import type { office } from '../../hooks/useOffice'
import { NewTemplate } from '../template/Template'
import './body.css'

export function Body({ office }: { office: office }) {
  const officeName = office.name.replace(/\s/g, '')
  return (
    <NewTemplate newTemplate={ { name: officeName } } office={office} />
  )
}

