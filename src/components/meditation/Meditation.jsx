import { Template } from '../template/Template'
import { Api } from '../../services/Api'

export function Meditation({ office}) {
  const meditation = office.date.getDate()
  const meditationName = 'Meditation-' + meditation
  const subtemplate = Api.getTemplate(meditationName)
  return (
    <Template template={subtemplate} office={office} />
    )
}

