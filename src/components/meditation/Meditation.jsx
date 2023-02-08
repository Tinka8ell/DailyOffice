import { templates } from '../../services/DailyOfficeTemplates'
import { Template } from '../common/Template'

export function Meditation({ office}) {
  console.log('Meditation.office: ', { ...office })
  const meditation = office.date.getDate()
  const meditationName = 'Meditation-' + meditation
  return (
    <Template name={meditationName} office={office} />
  )
}

