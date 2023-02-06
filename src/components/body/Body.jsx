/*
import { Sections } from '../sections/Sections'
*/
import { BibleQuote } from '../common/BibleQuote'

export function Body({ office}) {
  /*
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
  */

  return (
    <div className="Body">
        <h2>
          Temporarily do a verse:
        </h2>
        <BibleQuote version="NLT" reference="John 3:16-17" />
        <h2>
          And another:
        </h2>
        <BibleQuote version="NLT" reference="John 3:16" />
    </div>
  )
}
