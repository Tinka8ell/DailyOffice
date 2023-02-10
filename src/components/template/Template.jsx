import { Heading } from '../common/Heading'
import { BibleQuote, BibleReference } from '../common/BibleQuote'
import { LineBreak } from '../common/LineBreak'
import { Meditation } from '../meditation/Meditation'
import { Api } from '../../services/Api'

function content (template, office){
  if (template.text != null){
    return template.text
  } else if (template.items != null){
    return template.items.map((item, index) =>
      <Template key={index} template={item} office={office} />
    )
  } else {
    return (
      <Heading template={{ tag: "h3", text: "Template missing content" }} />
    )
  }
}

export function Template({ template, office }) {
  const name = template.name
  console.log('Template.template: ', template, ', name: "', name, '"')
  if (name != null){
    // named component
    if (name === 'Heading'){
      return ( <Heading template={template.parameters} />)
    } else if (name === 'BibleQuote'){
      return ( <BibleQuote reference={template.parameters.reference} version={template.parameters.version} />)
    } else if (name === 'BibleReference'){
      return ( <BibleReference reference={template.parameters.reference} version={template.parameters.version} />)
    } else if (name === 'Meditation'){
      return ( <Meditation office={office} />)
    } else if (name === 'LineBreak'){
      return ( <LineBreak />)
    } else {
      // assume it is the name of another template
      const subtemplate = Api.getTemplate(name)
      return (
        <Template template={subtemplate} office={office} />
      )
    }
  } else {
    // assumed list of sub templates
    if (template.div){
      return (
        <div className={template.className} >
          {content(template, office)}
        </div>
      )
    } else if (template.span){
      return (
        <span className={template.className} >
          {content(template)}
        </span>
      )
    } else {
      return (
        <>
          {content(template)}
        </>
      )
    }
  }
}
