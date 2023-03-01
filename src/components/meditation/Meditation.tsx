import { NewTemplate } from '../template/Template'
import { Api } from '../../services/Api'
import type { office } from '../../hooks/useOffice'

export function Meditation({ office }: { office: office }) {
  const meditation = office.date.getDate()
  const meditationName = 'Meditation-' + meditation
  const subtemplate = Api.getTemplate(meditationName)
  return (
    <NewTemplate newTemplate={subtemplate} />
    )
}

