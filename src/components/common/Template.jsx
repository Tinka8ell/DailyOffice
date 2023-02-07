import { Part } from './Part'
import { Heading } from './Heading'
import { BibleQuote } from './BibleQuote'
import { templates } from '../../services/DailyOfficeTemplates'

export function Template({ name }) {
  const officeTemplate = templates[name]
  console.log('Template.officeTemplate: ', officeTemplate)
  const template = officeTemplate.template
  console.log('Template.template: ', template)
  if ('string' === typeof template){
    return (
      <Template name={template} />
    )
  } else if (template == null){
    return (
      <>
      <Part type="h2">
        Missing Template.template
      </Part>
    </>
    )
  } else {
    // assuming we have an array of items ...
    console.log("Template.Template ", officeTemplate.name, " with ", template.length, " items")
    return (
      <div>
      { template.map((item, index) => {
        console.log("Template ", index, " of ", template.length, ": ", item.type)
        if (item.type === 'Heading'){
          return ( <Heading key={index} template={item} />)
        } else if (item.type === 'BibleQuote'){
          return ( <BibleQuote key={index} reference={item.reference} version={item.version} />)
        } else if (item.type === 'Part'){
          return ( 
            <Part 
              key={index} 
              type={item.tag} >
            { item.text}
            </Part>
          )
        } else {
          return (
            <>
              <Part type="h2">
                Unrecognised template type: {' ' + item.type}
              </Part>
            </>
          )
        }
      })}
      </div>
    )
  }
}
  
    /*
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

  return (
    <div className="Body">
        <Part type="h2">
          Temporarily do a verse:
        </Part>
        <BibleQuote version="NLT" reference="John 3:16-17" />
        <Part type="h2">
        And another:
        </Part>
        <BibleQuote version="NLT" reference="John 3:16" />
    </div>
  )
  */
