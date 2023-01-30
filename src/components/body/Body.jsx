import { Api } from '../../services/Api'
import { Sections } from '../sections/Sections'

export function Body({ office, updateOffice}) {
  const body = Api.getBody(office)
  let template = []
  if (body.type === 'template'){
    template = Api.getTemplate(body.template)
  }

  return (
    <div className="Body">
        <h2>
          Body template:
        </h2>
        <p>
          Name: {office.name}
        </p>
        <p>
          type: {body.type}
        </p>
        <p>
          Template: {body.template}
        </p>
        <Sections key={body.template} template={template} />
    </div>
  )
}
