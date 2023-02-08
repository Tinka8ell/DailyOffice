import { templates } from '../template/DailyOfficeTemplates'
import { Template } from '../template/Template'

export function Meditation({ office}) {
  console.log('Meditation.office: ', { ...office })
  const meditation = office.date.getDate()
  const meditationName = 'Meditation-' + meditation
  return (
    <Template name={meditationName} office={office} />
  )
}

